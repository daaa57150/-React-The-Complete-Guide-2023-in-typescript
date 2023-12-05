import { SelectableSheet, sheets } from '@models/uni';
import { useState } from 'react';

import deepdash from 'deepdash-es';
import lodash from 'lodash-es';
const _ = deepdash(lodash);






function get_bigrams(str: string){
  var s = str.toLowerCase()
  var v = s.split('');
  for(var i=0; i<v.length; i++){ v[i] = s.slice(i, i + 2); }
  return v;
}

function string_similarity(str1: string, str2: string) {
  if(str1.length>0 && str2.length>0){
    var pairs1 = get_bigrams(str1);
    var pairs2 = get_bigrams(str2);
    var union = pairs1.length + pairs2.length;
    var hits = 0;
    for(var x=0; x<pairs1.length; x++){
      for(var y=0; y<pairs2.length; y++){
        if(pairs1[x]==pairs2[y]) hits++;
    }}
    if(hits>0) return ((2.0 * hits) / union);
  }
  return 0.0
}






export default function UniFilter() {

  const [searchText, setSearchText] = useState<string|undefined>();

  const onInputChange = (q?: string) => {
    setSearchText(q);
  }

  const options = { };
  const predicate = (value: any, key: any, parentValue: any, context: any) => {
    if(!searchText) return true;

    if(typeof(value) === 'string') {
      return value.indexOf(searchText) >= 0;
    }
    return false;
  }

  const filteredSheets: SelectableSheet[] = _.filterDeep(sheets, predicate, options);

  return (
    <>
      <input onChange={ (event) => onInputChange(event.target.value) }></input>
      {filteredSheets && filteredSheets.map(sheet => (
        <>
          <p><h1>{ sheet.title }</h1></p>
          <p><h2>Questions:</h2></p>
          <div>
            {sheet.questions && sheet.questions.map(question => (
              <>
                <p>{ question.text }</p>
              </>
            ))}
          </div>

          <p><h2>Sections:</h2></p>
          <div>
            {sheet.sections && sheet.sections.map(section => (
              <>
                <p>{ section.name }</p>
                <p><h3>Questions de la section:</h3></p>
                <div>
                  {section.questions && section.questions.map(question => (
                    <>
                      <p>{ question.text }</p>
                    </>
                  ))}
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </>
  );
}



