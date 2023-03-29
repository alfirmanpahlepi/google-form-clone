/* eslint-disable no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react';

export type InputType = 'text' | 'textarea' | 'radio' | 'checkbox';

export interface Question {
  title: string;
  type: InputType;
  withDescription: boolean;
  description?: string;
  options: string[];
  checkboxs?: string[];
}
export interface Data {
  title: string;
  description: string;
  questions: Question[];
}

export interface Action {
  duplicateQuestion: (targetIndex: number, question: Question) => void;
  addQuestion: (targetIndex: number) => void;
  deleteQuestion: (targetIndex: number) => void;
  onTitleOrDescriptioQuestionChange: (
    targetIndex: number,
    key: 'title' | 'description',
    value: string,
  ) => void;
  changeDescriptionStatus: (targetIndex: number, value: boolean) => void;
  changeQuestionType: (targetIndex: number, type: InputType) => void;
  addOption: (targetIndex: number) => void;
  setOptionName: (targetIndex: number, optionIndex: number, value: string) => void;
  removeOption: (targetIndex: number, optionIndex: number) => void;
}

export default function useEditForms() {
  const [data, setData] = useState<Data>({ title: '', description: '', questions: [] });

  function onHeadFormInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const action: Action = {
    duplicateQuestion: function (targetIndex: number, question: Question) {
      const newData = { ...data };
      newData.questions.splice(targetIndex, 0, question);
      setData({ ...newData });
    },

    addQuestion: function (targetIndex: number) {
      const newData = { ...data };
      newData.questions.splice(targetIndex, 0, {
        title: '',
        withDescription: false,
        type: 'text',
        options: [],
      });
      setData({ ...newData });
    },

    deleteQuestion: function (targetIndex: number) {
      const newData = { ...data };
      newData.questions.splice(targetIndex, 1);
      setData({ ...newData });
    },

    onTitleOrDescriptioQuestionChange: function (
      targetIndex: number,
      key: 'title' | 'description',
      value: string,
    ) {
      const newData = { ...data };
      newData.questions[targetIndex][key] = value;
      setData({ ...newData });
    },

    changeDescriptionStatus: function (targetIndex: number, value: boolean) {
      const newData = { ...data };
      newData.questions[targetIndex].withDescription = value;
      setData({ ...newData });
    },

    changeQuestionType: function (targetIndex: number, type: InputType) {
      const newData = { ...data };
      newData.questions[targetIndex].type = type;
      newData.questions[targetIndex].options = [];
      setData({ ...newData });
    },

    addOption: function (targetIndex: number) {
      const newData = { ...data };
      newData.questions[targetIndex].options.push('');
      setData({ ...newData });
    },

    setOptionName: function (targetIndex: number, optionIndex: number, value: string) {
      const newData = { ...data };
      newData.questions[targetIndex].options[optionIndex] = value;
      setData({ ...newData });
    },

    removeOption: function (targetIndex: number, optionIndex: number) {
      const newData = { ...data };
      newData.questions[targetIndex].options.splice(optionIndex, 1);
      setData({ ...newData });
    },
  };

  function submit() {
    console.log('data', data);
  }

  useEffect(() => {
    return () => setData({ title: '', description: '', questions: [] });
  }, []);

  return {
    title: data.title,
    description: data.description,
    questions: data.questions,
    onHeadFormInputChange,
    action,
    submitEditForm: submit,
  };
}
