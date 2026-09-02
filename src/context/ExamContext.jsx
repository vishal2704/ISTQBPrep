import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { StorageService } from "../services/storageService";
import { buildExamSet, buildExamQuestion } from "../services/questionUtils";
import { questionBank } from "../data/questionBank";
import {
  isAnswerCorrect,
  isAnswerEmpty,
  formatUserAnswer,
  formatCorrectAnswer,
  getQuestionType,
} from "../services/answerUtils";
import { StreakService } from "../services/streakService";
import { RevisionService } from "../services/revisionService";

const ExamContext = createContext(null);

export function ExamProvider({ children }) {
  const [examData, setExamData] = useState(() => StorageService.loadExam());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (examData) StorageService.saveExam(examData);
  }, [examData]);

  const startExam = useCallback((chapter, mode, questionCount) => {
    const questions = buildExamSet(chapter, mode, questionCount);
    const fresh = {
      chapter,
      timed: mode === "timed",
      questions,
      answers: new Array(questions.length).fill(null),
      bookmarks: [],
      startedAt: Date.now(),
      combinationLocked: false,
    };
    StorageService.saveExam(fresh);
    setExamData(fresh);
    setCurrentIndex(0);
  }, []);

  const startRetry = useCallback((questionIds, label = "retry") => {
    const pool = questionBank.filter((q) => questionIds.includes(q.id));
    const questions = pool.map(buildExamQuestion);
    const fresh = {
      chapter: label,
      timed: false,
      questions,
      answers: new Array(questions.length).fill(null),
      bookmarks: [],
      startedAt: Date.now(),
      combinationLocked: false,
    };
    StorageService.saveExam(fresh);
    setExamData(fresh);
    setCurrentIndex(0);
  }, []);

  const resumeExam = useCallback(() => {
    const saved = StorageService.loadExam();
    if (saved) {
      setExamData(saved);
      setCurrentIndex(0);
    }
  }, []);

  const setAnswer = useCallback((index, value) => {
    setExamData((prev) => {
      const next = { ...prev, answers: [...prev.answers] };
      next.answers[index] = value;
      return next;
    });
  }, []);

  const toggleBookmark = useCallback((questionId) => {
    setExamData((prev) => {
      const has = prev.bookmarks.includes(questionId);
      return {
        ...prev,
        bookmarks: has
          ? prev.bookmarks.filter((id) => id !== questionId)
          : [...prev.bookmarks, questionId],
      };
    });

    const global = new Set(StorageService.loadBookmarks());
    if (global.has(questionId)) global.delete(questionId);
    else global.add(questionId);
    StorageService.saveBookmarks([...global]);
  }, []);

  const setLocked = useCallback((locked) => {
    setExamData((prev) => ({ ...prev, combinationLocked: locked }));
  }, []);

  const finishExam = useCallback(() => {
    if (!examData) return null;

    let correctCount = 0;
    const wrongIds = [];
    const details = [];
    const byChapter = {};
    const byDifficulty = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };

    examData.questions.forEach((q, i) => {
      const userAnswer = examData.answers[i];
      const correct = isAnswerCorrect(q, userAnswer);

      if (correct) {
        correctCount++;
        RevisionService.remove(q.id);
      } else if (!isAnswerEmpty(userAnswer) || examData.timed) {
        wrongIds.push(q.id);
        RevisionService.add(q.id);
      }

      details.push({
        id: q.id,
        chapter: q.chapter,
        difficulty: q.difficulty,
        type: getQuestionType(q),
        question: q.question,
        userAnswer: formatUserAnswer(q, userAnswer),
        correctAnswer: formatCorrectAnswer(q),
        explanation: q.explanation || "",
        isCorrect: correct,
        wasAnswered: !isAnswerEmpty(userAnswer),
        bookmarked: examData.bookmarks.includes(q.id),
      });

      byChapter[q.chapter] = byChapter[q.chapter] || { correct: 0, total: 0 };
      byChapter[q.chapter].total++;
      if (correct) byChapter[q.chapter].correct++;

      if (byDifficulty[q.difficulty]) {
        byDifficulty[q.difficulty].total++;
        if (correct) byDifficulty[q.difficulty].correct++;
      }
    });

    const total = examData.questions.length;
    const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);
    const durationSeconds = examData.startedAt ? Math.round((Date.now() - examData.startedAt) / 1000) : null;

    const result = {
      id: `res_${Date.now()}`,
      chapter: examData.chapter,
      timed: examData.timed,
      total,
      correct: correctCount,
      score,
      date: new Date().toISOString(),
      durationSeconds,
      wrongIds,
      details,
      byChapter,
      byDifficulty,
      bookmarkCount: examData.bookmarks.length,
    };

    StorageService.saveResult(result);
    StreakService.recordPractice();
    StorageService.clearExam();
    setExamData(null);

    return result;
  }, [examData]);

  const clearExam = useCallback(() => {
    StorageService.clearExam();
    setExamData(null);
  }, []);

  return (
    <ExamContext.Provider
      value={{
        examData,
        currentIndex,
        setCurrentIndex,
        startExam,
        startRetry,
        resumeExam,
        setAnswer,
        toggleBookmark,
        setLocked,
        finishExam,
        clearExam,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  return useContext(ExamContext);
}
