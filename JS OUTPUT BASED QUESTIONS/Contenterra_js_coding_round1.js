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

    //     For each mid exam (m), we calculate the total marks by adding telugu + hindi + english.
    // 👉 This gives us an array of numbers — one number per mid exam.

    //     Example:
    //     If a student has:

    //     mids: [
    //       { telugu: 40, hindi: 30, english: 20 }, // mid 1 → 90
    //       { telugu: 50, hindi: 40, english: 30 }  // mid 2 → 120
    //     ]


    //     then totals = [90, 120]

    // Take best two mids
    // Sort descending, pick best 2, sum them


    const bestTwo = totals.sort((a, b) => b - a).slice(0, 2);

    // totals.sort((a, b) => b - a) sorts the totals in descending order (highest first).
    //  .slice(0, 2) takes only the top 2 values (the two best mids).

    //     Example:
   //     If totals = [90, 120, 100], after sorting → [120, 100, 90].
   //     After slicing → [120, 100].

    

    const bestSum = bestTwo.reduce((a, b) => a + b, 0);

    // Sum of best two mids
    //     Add those two best totals together.
    // 👉 .reduce((a, b) => a + b, 0) means "start from 0, keep adding each number".

    //     Example:
    //     bestTwo = [120, 100] → bestSum = 220.

    return { name: student.name, score: bestSum };

    //     👉 For each student, return a new object like:

    // { name: "A", score: 220 }
  })
  // Sort students by their bestTwoSum descending
  .sort((a, b) => b.score - a.score)
  // Return just the names in rank order
  .map(s => s.name);

console.log(ranked);

// Output:
[ 'D', 'B', 'E', 'A', 'C' ]


// 👉 Ranking order is: D > B > E > A > C
