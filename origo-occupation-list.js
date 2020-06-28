"use strict";

import data from "./data.json";

const occupationMap = {};

export const mapData = (acc, item) => {
  occupationMap[data[item].toLowerCase()] = item;
  (acc.codes || []).push(item);
  (acc.occupations || []).push(data[item]);
  return acc;
};

export const { codes, occupations } = Object.keys(data).reduce(mapData, {
  codes: [],
  occupations: [],
});

export const getCode = (occupation) => occupationMap[occupation.toLowerCase()];

export const getCodes = () => codes;

export const getCodesList = () => data;

export const getOccupation = (code) => data[String(code.toUpperCase())];

export const getOccupations = () => occupations;

export const getOccupationList = () => Object.values(data);

export const getData = () => data;
