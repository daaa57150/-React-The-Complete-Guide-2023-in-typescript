interface Selectable {
  selected: boolean
}

export interface SelectableSheet extends SheetEntity, Selectable {
  sections: Array<SelectableSection>
  questions: Array<SelectableQuestion>
}


export interface SelectableSection extends SectionEntity, Selectable {
  questions: Array<SelectableQuestion>
}

export interface SelectableQuestion extends QuestionEntity, Selectable {}


interface SheetEntity {
  title: string;
}

interface SectionEntity {
  name: string;
}


interface QuestionEntity {
  text: string;
}



const sheet1: SelectableSheet = {
  title: 'sheet 1',
  questions: [{
    selected: true,
    text: 'La question 1'
  }, {
    selected: true,
    text: 'La question 2'
  }],
  sections: [{
    selected: true,
    name: 'section 1',
    questions: [{
      selected: true,
      text: 'question 1 de la section 1'
    }, {
      selected: true,
      text: 'question 2 de la section 1'
    }]
  }, {
    selected: true,
    name: 'section 2',
    questions: [{
      selected: true,
      text: 'question 1 de la section 2'
    }, {
      selected: true,
      text: 'question 2 de la section 2'
    }]
  }],
  selected: true
};
const sheet2: SelectableSheet = {
  title: 'sheet 2',
  questions: [{
    selected: true,
    text: 'La question 1'
  }, {
    selected: true,
    text: 'La question 2'
  }],
  sections: [{
    selected: true,
    name: 'section 1',
    questions: [{
      selected: true,
      text: 'question 1 de la section 1'
    }, {
      selected: true,
      text: 'question 2 de la section 1'
    }]
  }, {
    selected: true,
    name: 'section 2',
    questions: [{
      selected: true,
      text: 'question 1 de la section 2'
    }, {
      selected: true,
      text: 'question 2 de la section 2'
    }]
  }],
  selected: true
};

export const sheets: SelectableSheet[] = [sheet1, sheet2];



