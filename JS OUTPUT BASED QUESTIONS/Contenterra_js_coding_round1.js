// You want to rank the students based on the sum 
// of their best two mid exams (marks across Telugu, Hindi, English combined), 
// and then return the list of student names in ranked order.
// Senior React Developer coding round 1


const students = [
  {
    name: "A",
    rollNo: 1,
    mids: [
      { mid: 1, telugu: 40, hindi: 40, english: 40 },
      { mid: 2, telugu: 35, hindi: 60, english: 70 },
      { mid: 3, telugu: 45, hindi: 50, english: 60 }
    ]
  },
  {
    name: "B",
    rollNo: 2,
    mids: [
      { mid: 1, telugu: 50, hindi: 35, english: 60 },
      { mid: 2, telugu: 60, hindi: 40, english: 55 },
      { mid: 3, telugu: 55, hindi: 65, english: 70 }
    ]
  },
  {
    name: "C",
    rollNo: 3,
    mids: [
      { mid: 1, telugu: 30, hindi: 45, english: 50 },
      { mid: 2, telugu: 40, hindi: 50, english: 45 },
      { mid: 3, telugu: 42, hindi: 48, english: 60 }
    ]
  },
  {
    name: "D",
    rollNo: 4,
    mids: [
      { mid: 1, telugu: 45, hindi: 40, english: 35 },
      { mid: 2, telugu: 55, hindi: 70, english: 75 },
      { mid: 3, telugu: 48, hindi: 62, english: 60 }
    ]
  },
  {
    name: "E",
    rollNo: 5,
    mids: [
      { mid: 1, telugu: 35, hindi: 55, english: 60 },
      { mid: 2, telugu: 50, hindi: 48, english: 64 },
      { mid: 3, telugu: 42, hindi: 65, english: 58 }
    ]
  }
];

const ranked = students
  .map(student => {
    // Calculate total marks for each mid
    const totals = student.mids.map(m => m.telugu + m.hindi + m.english);

    // Take best two mids
    const bestTwo = totals.sort((a, b) => b - a).slice(0, 2);

    // Sum of best two mids
    const bestSum = bestTwo.reduce((a, b) => a + b, 0);

    return { name: student.name, score: bestSum };
  })
  // Sort by score descending
  .sort((a, b) => b.score - a.score)
  // Return only names
  .map(s => s.name);

console.log(ranked);

// Output:
[ 'D', 'B', 'E', 'A', 'C' ]


// 👉 Ranking order is: D > B > E > A > C