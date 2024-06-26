/*
Copyright (c) Facebook, Inc. and its affiliates.
*/

// src/components/LocoView.stories.js

import React from "react";
import { action } from "@storybook/addon-actions";

import TurkInfo from "./TurkInfo";
import testStore from "../../TestStore";

export default {
  component: TurkInfo,
  title: "TurkInfo",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <TurkInfo stateManager={testStore} />;
};
