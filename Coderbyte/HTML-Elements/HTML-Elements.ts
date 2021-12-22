function StringChallenge(str: string) { 

  // code goes here
  // insert opening and closing tags into array
  let { openingTags, closingTags } = extractTags(str);

  let uncorrectlyNested = "";

  // compare between two arrays
  openingTags.forEach((el) => {
    let elementIndex = closingTags.indexOf(el);
    if(elementIndex === -1) uncorrectlyNested = el;
    else closingTags.splice(elementIndex, 1);
  });
  
  // if there's no difference return true
  return uncorrectlyNested || "true";
}

interface Tags {
  openingTags: string[],
  closingTags: string[]
}

function extractTags(str: string): Tags {
  let seperatedString = str.split("<");
  const openingTags: string[] = [];
  const closingTags: string[] = [];

  seperatedString.forEach((el) => {
    if (el !== "") {
    let tag = el.split(">")[0];

    if (tag.startsWith("/"))
      closingTags.push(tag.split("/")[1]);
    else openingTags.push(tag);
    }
  });

  return { openingTags, closingTags };
}

console.log(StringChallenge("<div>abc</div><p><em><i>test test test</b></em></p>"));
