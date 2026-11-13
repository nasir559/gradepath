"use strict";

const GRADING_SYSTEMS = {
  ugc: {
    name: "UGC Uniform Grading System",
    shortName: "UGC",
    description: "The uniform grading scale used by many universities.",
    topGrade: "A+ starts at 80%",
    note: "Choose this system if your university follows the UGC uniform grading table.",
    source:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-ugc/2024/12/fb9d3f33de8f4f3fa111c5b47659d8b5.pdf",

    grades: [
      { letter: "A+", points: 4.00, range: "80% and above" },
      { letter: "A",  points: 3.75, range: "75% to below 80%" },
      { letter: "A-", points: 3.50, range: "70% to below 75%" },
      { letter: "B+", points: 3.25, range: "65% to below 70%" },
      { letter: "B",  points: 3.00, range: "60% to below 65%" },
      { letter: "B-", points: 2.75, range: "55% to below 60%" },
      { letter: "C+", points: 2.50, range: "50% to below 55%" },
      { letter: "C",  points: 2.25, range: "45% to below 50%" },
      { letter: "D",  points: 2.00, range: "40% to below 45%" },
      { letter: "F",  points: 0.00, range: "Below 40%" }
    ]
  },

  iub: {
    name: "Independent University, Bangladesh",
    shortName: "IUB",
    description: "The published undergraduate grading scale of IUB.",
    topGrade: "A starts at 90%",
    note: "Based on IUB’s published undergraduate grading table. D is the lowest passing grade.",
    source: "https://ar.iub.edu.bd/xmlui/handle/11348/1600",

    grades: [
      { letter: "A",  points: 4.00, range: "90% and above" },
      { letter: "A-", points: 3.70, range: "85% to below 90%" },
      { letter: "B+", points: 3.30, range: "80% to below 85%" },
      { letter: "B",  points: 3.00, range: "75% to below 80%" },
      { letter: "B-", points: 2.70, range: "70% to below 75%" },
      { letter: "C+", points: 2.30, range: "65% to below 70%" },
      { letter: "C",  points: 2.00, range: "60% to below 65%" },
      { letter: "C-", points: 1.70, range: "55% to below 60%" },
      { letter: "D+", points: 1.30, range: "50% to below 55%" },
      { letter: "D",  points: 1.00, range: "45% to below 50%" },
      { letter: "F",  points: 0.00, range: "Below 45%" }
    ]
  }
};

// NSU
GRADING_SYSTEMS.nsu = {
  name: "North South University",
  shortName: "NSU",
  description: "North South University’s published grading scale.",
  topGrade: "A starts at 93%",
  note:
    "NSU’s published standard grading table. Individual instructors may adjust exact grade cutoffs.",
  source:
    "https://www.northsouth.edu/academic/grading-policy.html",

  grades: [
    { letter: "A",  points: 4.00, range: "93% and above" },
    { letter: "A-", points: 3.70, range: "90–92%" },
    { letter: "B+", points: 3.30, range: "87–89%" },
    { letter: "B",  points: 3.00, range: "83–86%" },
    { letter: "B-", points: 2.70, range: "80–82%" },
    { letter: "C+", points: 2.30, range: "77–79%" },
    { letter: "C",  points: 2.00, range: "73–76%" },
    { letter: "C-", points: 1.70, range: "70–72%" },
    { letter: "D+", points: 1.30, range: "67–69%" },
    { letter: "D",  points: 1.00, range: "60–66%" },
    { letter: "F",  points: 0.00, range: "Below 60%" }
  ]
};

// BRAC
GRADING_SYSTEMS.brac = {
  name: "BRAC University",
  shortName: "BRAC",
  description: "BRAC University’s undergraduate grading scale.",
  topGrade: "A starts at 90%",
  note:
    "Undergraduate scale from Fall 2020. Both A and A+ earn 4.00 grade points.",
  source:
    "https://www.bracu.ac.bd/academics/policies-and-procedures",

  grades: [
    { letter: "A+", points: 4.00, range: "97–100%" },
    { letter: "A",  points: 4.00, range: "90% to below 97%" },
    { letter: "A-", points: 3.70, range: "85% to below 90%" },
    { letter: "B+", points: 3.30, range: "80% to below 85%" },
    { letter: "B",  points: 3.00, range: "75% to below 80%" },
    { letter: "B-", points: 2.70, range: "70% to below 75%" },
    { letter: "C+", points: 2.30, range: "65% to below 70%" },
    { letter: "C",  points: 2.00, range: "60% to below 65%" },
    { letter: "C-", points: 1.70, range: "57% to below 60%" },
    { letter: "D+", points: 1.30, range: "55% to below 57%" },
    { letter: "D",  points: 1.00, range: "52% to below 55%" },
    { letter: "D-", points: 0.70, range: "50% to below 52%" },
    { letter: "F",  points: 0.00, range: "Below 50%" }
  ]
};

// AIUB 
GRADING_SYSTEMS.aiub = {
  name: "American International University-Bangladesh",
  shortName: "AIUB",

  description: "AIUB’s current published grading system.",
  topGrade: "A+ starts at 90%",

  note:
    "V3 applies to undergraduate and graduate students enrolled from Spring 2016–2017 onward.",

  source:
    "https://www.aiub.edu/academic-regulations/grading-system",

  grades: [
    { letter: "A+", points: 4.00, range: "90–100%" },
    { letter: "A",  points: 3.75, range: "85% to below 90%" },
    { letter: "B+", points: 3.50, range: "80% to below 85%" },
    { letter: "B",  points: 3.25, range: "75% to below 80%" },
    { letter: "C+", points: 3.00, range: "70% to below 75%" },
    { letter: "C",  points: 2.75, range: "65% to below 70%" },
    { letter: "D+", points: 2.50, range: "60% to below 65%" },
    { letter: "D",  points: 2.25, range: "50% to below 60%" },
    { letter: "F",  points: 0.00, range: "Below 50%" }
  ]
};

//UIU
GRADING_SYSTEMS.uiu = {
  name: "United International University",
  shortName: "UIU",
  description: "United International University’s published grading scale.",
  topGrade: "A starts at 90%",
  note:
    "UIU’s published grading table. A- earns 3.67 and B+ earns 3.33 grade points.",
  source:
    "https://www.uiu.ac.bd/academics/grading-performance-evaluation/",

  grades: [
    { letter: "A",  points: 4.00, range: "90–100%" },
    { letter: "A-", points: 3.67, range: "86–89%" },
    { letter: "B+", points: 3.33, range: "82–85%" },
    { letter: "B",  points: 3.00, range: "78–81%" },
    { letter: "B-", points: 2.67, range: "74–77%" },
    { letter: "C+", points: 2.33, range: "70–73%" },
    { letter: "C",  points: 2.00, range: "66–69%" },
    { letter: "C-", points: 1.67, range: "62–65%" },
    { letter: "D+", points: 1.33, range: "58–61%" },
    { letter: "D",  points: 1.00, range: "55–57%" },
    { letter: "F",  points: 0.00, range: "0–54%" }
  ]
};

//ULAB
GRADING_SYSTEMS.ulab = {
  name: "University of Liberal Arts Bangladesh",
  shortName: "ULAB",
  description: "ULAB’s published undergraduate grading scale.",
  topGrade: "A starts at 90%",
  note:
    "Undergraduate scale. Both A and A+ earn 4.00. A- earns 3.80 and B- earns 2.80.",
  source:
    "https://ulab.edu.bd/sites/default/files/uploads/2026/10/06/General-Academic-Policy-Undergraduate-6-10-2026-v3.pdf",

  grades: [
    { letter: "A+", points: 4.00, range: "95% and above" },
    { letter: "A",  points: 4.00, range: "90–94%" },
    { letter: "A-", points: 3.80, range: "85–89%" },
    { letter: "B+", points: 3.30, range: "80–84%" },
    { letter: "B",  points: 3.00, range: "75–79%" },
    { letter: "B-", points: 2.80, range: "70–74%" },
    { letter: "C+", points: 2.50, range: "65–69%" },
    { letter: "C",  points: 2.20, range: "60–64%" },
    { letter: "D",  points: 1.50, range: "50–59%" },
    { letter: "F",  points: 0.00, range: "Below 50%" }
  ]
};

const elements = {
  homePage: document.getElementById("home-page"),
  calculatorPage: document.getElementById("calculator-page"),
  universityGrid: document.getElementById("university-grid"),

  form: document.getElementById("calculator-form"),
  previousCGPA: document.getElementById("previous-cgpa"),
  previousCredits: document.getElementById("previous-credits"),
  courseList: document.getElementById("course-list"),
  error: document.getElementById("form-error"),

  emptyResult: document.getElementById("empty-result"),
  calculatedResult: document.getElementById("calculated-result"),
  staleMessage: document.getElementById("stale-message")
};

let selectedSystem = null;
let nextCourseId = 1;
let hasResult = false;

function renderUniversityCards() {
  elements.universityGrid.replaceChildren();

  Object.entries(GRADING_SYSTEMS).forEach(([id, system]) => {
    const card = document.createElement("a");

    card.className = "university-card";
    card.href = `#/calculator/${id}`;
    card.setAttribute("aria-label", `Use ${system.name}`);

    const badge = document.createElement("span");
    badge.className = "university-badge";
    badge.textContent = system.shortName;

    const arrow = document.createElement("span");
    arrow.className = "card-arrow";
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");

    const heading = document.createElement("h3");
    heading.textContent = system.name;

    const description = document.createElement("p");
    description.textContent = system.description;

    const topGrade = document.createElement("p");
    topGrade.textContent = system.topGrade;

    card.append(badge, arrow, heading, description, topGrade);
    elements.universityGrid.append(card);
  });
}

function renderRoute(event) {
  const match = location.hash.match(/^#\/calculator\/([a-z]+)$/);
  const id = match ? match[1] : null;

  selectedSystem = id ? GRADING_SYSTEMS[id] : null;

  if (!selectedSystem) {
    elements.homePage.hidden = false;
    elements.calculatorPage.hidden = true;
    document.title = "Gradepath — CGPA Calculator";
    window.scrollTo(0, 0);
    return;
  }

  elements.homePage.hidden = true;
  elements.calculatorPage.hidden = false;

  document.getElementById("system-badge").textContent =
    `${selectedSystem.shortName} GRADING SYSTEM`;

  document.getElementById("university-name").textContent =
    selectedSystem.name;

  document.title =
    `${selectedSystem.shortName} CGPA Calculator — Gradepath`;

  resetCalculator();
  renderGradingGuide();

  document.querySelector(".grading-guide").open = false;
  window.scrollTo(0, 0);

  if (event) {
    document.getElementById("calculator-title").focus({
      preventScroll: true
    });
  }
}

function renderGradingGuide() {
  document.getElementById("grading-note").textContent =
    selectedSystem.note;

  document.getElementById("grading-caption").textContent =
    `${selectedSystem.shortName} — grade points per credit`;

  document.getElementById("grading-source").href =
    selectedSystem.source;

  const tableBody = document.getElementById("grading-table-body");
  tableBody.replaceChildren();

  selectedSystem.grades.forEach((grade) => {
    const row = document.createElement("tr");

    [grade.range, grade.letter, grade.points.toFixed(2)].forEach(
      (value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      }
    );

    tableBody.append(row);
  });
}

function addCourse(focusNewCourse = false) {
  const id = nextCourseId++;

  const row = document.createElement("div");
  row.className = "course-row";

  row.innerHTML = `
    <div class="course-field course-name">
      <label for="course-name-${id}">Course</label>
      <input
        id="course-name-${id}"
        data-field="name"
        type="text"
        maxlength="100"
        placeholder="Name, optional"
      >
    </div>

    <div class="course-field course-credits">
      <label for="course-credits-${id}">Credits</label>
      <input
        id="course-credits-${id}"
        data-field="credits"
        type="number"
        inputmode="decimal"
        min="0"
        step="any"
        value="3"
      >
    </div>

    <div class="course-field course-grade">
      <label for="course-grade-${id}">Grade</label>
      <select id="course-grade-${id}" data-field="grade">
        <option value="">Select grade</option>
      </select>
    </div>

    <button
      class="remove-course"
      type="button"
      aria-label="Remove course"
    >×</button>
  `;

  const select = row.querySelector("select");

  selectedSystem.grades.forEach((grade) => {
    const option = document.createElement("option");

    option.value = grade.letter;
    option.textContent =
      `${grade.letter} · ${grade.points.toFixed(2)}`;

    select.append(option);
  });

  elements.courseList.append(row);
  updateCourseLabels();

  if (focusNewCourse) {
    row.querySelector('[data-field="name"]').focus();
  }
}

function updateCourseLabels() {
  const rows = [...elements.courseList.children];

  rows.forEach((row, index) => {
    const number = index + 1;

    row.querySelector(".course-name label").textContent =
      `Course ${number}`;

    row.querySelector('[data-field="name"]').setAttribute(
      "aria-label",
      `Course ${number} name, optional`
    );

    row.querySelector('[data-field="credits"]').setAttribute(
      "aria-label",
      `Course ${number} credits`
    );

    row.querySelector('[data-field="grade"]').setAttribute(
      "aria-label",
      `Course ${number} grade`
    );

    const removeButton = row.querySelector(".remove-course");

    removeButton.setAttribute(
      "aria-label",
      `Remove course ${number}`
    );

    removeButton.disabled = rows.length === 1;
  });
}

function readCourses() {
  return [...elements.courseList.children].map((row) => ({
    name: row.querySelector('[data-field="name"]').value.trim(),
    credits: row.querySelector('[data-field="credits"]').value.trim(),
    grade: row.querySelector('[data-field="grade"]').value
  }));
}

function calculateCGPA(input, system) {
  const previousCGPAText = input.previousCGPA.trim();
  const previousCreditsText = input.previousCredits.trim();

  const hasPreviousCGPA = previousCGPAText !== "";
  const hasPreviousCredits = previousCreditsText !== "";

  if (hasPreviousCGPA !== hasPreviousCredits) {
    throw new Error(
      "Enter both your current CGPA and completed credits, or leave both fields empty."
    );
  }

  const previousCGPA = hasPreviousCGPA
    ? Number(previousCGPAText)
    : 0;

  const previousCredits = hasPreviousCredits
    ? Number(previousCreditsText)
    : 0;

  if (
    !Number.isFinite(previousCGPA) ||
    previousCGPA < 0 ||
    previousCGPA > 4
  ) {
    throw new Error("Your current CGPA must be between 0.00 and 4.00.");
  }

  if (
    !Number.isFinite(previousCredits) ||
    previousCredits < 0
  ) {
    throw new Error("Completed credits must be zero or greater.");
  }

  const gradePoints = new Map(
    system.grades.map((grade) => [grade.letter, grade.points])
  );

  let newCredits = 0;
  let semesterQualityPoints = 0;
  let courseCount = 0;

  input.courses.forEach((course, index) => {
    const credits = Number(course.credits);

    const isEmptyRow =
      course.name === "" &&
      course.grade === "" &&
      (course.credits === "" || credits === 3);

    if (isEmptyRow) return;

    if (!gradePoints.has(course.grade)) {
      throw new Error(`Please select a grade for course ${index + 1}.`);
    }

    if (
      course.credits === "" ||
      !Number.isFinite(credits) ||
      credits <= 0
    ) {
      throw new Error(
        `Credits for course ${index + 1} must be greater than zero.`
      );
    }

    newCredits += credits;
    semesterQualityPoints += credits * gradePoints.get(course.grade);
    courseCount++;
  });

  if (courseCount === 0) {
    throw new Error("Choose a grade for at least one course.");
  }

  const previousQualityPoints = previousCGPA * previousCredits;
  const totalCredits = previousCredits + newCredits;
  const totalQualityPoints =
    previousQualityPoints + semesterQualityPoints;

  if (
    ![
      previousQualityPoints,
      newCredits,
      semesterQualityPoints,
      totalCredits,
      totalQualityPoints
    ].every(Number.isFinite)
  ) {
    throw new Error("The credit values are too large. Please check your entries.");
  }

  return {
    cgpa: totalQualityPoints / totalCredits,
    semesterGPA: semesterQualityPoints / newCredits,
    previousCredits,
    newCredits,
    totalCredits,
    courseCount
  };
}

function formatCredits(value) {
  return new Intl.NumberFormat("en", {
    maximumFractionDigits: 8
  }).format(value);
}

function clearError() {
  elements.error.hidden = true;
  elements.error.textContent = "";
}

function showError(message) {
  elements.error.textContent = message;
  elements.error.hidden = false;
}

function markResultStale() {
  if (hasResult) {
    elements.staleMessage.hidden = false;
  }
}

function showResult(result) {
  document.getElementById("result-cgpa").textContent =
    result.cgpa.toFixed(2);

  document.getElementById("result-semester-gpa").textContent =
    result.semesterGPA.toFixed(2);

  document.getElementById("result-new-credits").textContent =
    formatCredits(result.newCredits);

  document.getElementById("result-total-credits").textContent =
    formatCredits(result.totalCredits);

  document.getElementById("result-description").textContent =
    result.previousCredits > 0
      ? `${formatCredits(result.previousCredits)} previous credits and ${
          formatCredits(result.newCredits)
        } new credits are included in this credit-weighted average.`
      : "No previous results were included, so your semester GPA and CGPA are the same.";

  elements.emptyResult.hidden = true;
  elements.calculatedResult.hidden = false;
  elements.staleMessage.hidden = true;
  hasResult = true;

  if (window.matchMedia("(max-width: 900px)").matches) {
    document.querySelector(".result-panel").scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start"
    });
  }
}

function resetCalculator() {
  elements.previousCGPA.value = "";
  elements.previousCredits.value = "";

  elements.courseList.replaceChildren();

  for (let index = 0; index < 6; index++) {
    addCourse();
  }

  clearError();

  elements.emptyResult.hidden = false;
  elements.calculatedResult.hidden = true;
  elements.staleMessage.hidden = true;

  hasResult = false;
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearError();

  const invalidNumber = [...elements.form.querySelectorAll(
    'input[type="number"]'
  )].find((input) => input.validity.badInput);

  if (invalidNumber) {
    showError("Please enter a valid number in the highlighted field.");
    invalidNumber.focus();
    return;
  }

  try {
    const result = calculateCGPA(
      {
        previousCGPA: elements.previousCGPA.value,
        previousCredits: elements.previousCredits.value,
        courses: readCourses()
      },
      selectedSystem
    );

    showResult(result);
  } catch (error) {
    showError(error.message);
  }
});

elements.form.addEventListener("input", () => {
  clearError();
  markResultStale();
});

document.getElementById("add-course").addEventListener("click", () => {
  clearError();
  addCourse(true);
});

elements.courseList.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-course");

  if (!button || button.disabled) return;

  const row = button.closest(".course-row");
  const rows = [...elements.courseList.children];
  const removedIndex = rows.indexOf(row);

  row.remove();
  updateCourseLabels();
  clearError();
  markResultStale();

  const remainingRows = [...elements.courseList.children];
  const nextRow = remainingRows[
    Math.min(removedIndex, remainingRows.length - 1)
  ];

  nextRow.querySelector("input").focus();
});

document.getElementById("reset-button").addEventListener("click", () => {
  resetCalculator();
  elements.previousCGPA.focus();
});

window.addEventListener("hashchange", renderRoute);

renderUniversityCards();
renderRoute();