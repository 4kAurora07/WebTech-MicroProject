/**
 * AI Student Performance Analytics Platform - Core Controller
 * Karunya Institute of Technology and Sciences
 */

// Default Demo Students Data
const INITIAL_STUDENTS = [
  {
    regNo: "URK25CS101",
    name: "Aravind Kumar",
    dept: "Computer Science & Engg",
    deptCode: "CSE",
    sem: "Semester 2",
    attendance: 94,
    internalMarks: 88,
    cgpa: 9.24,
    grade: "O",
    status: "Distinction",
    risk: "Low Risk",
    subjects: {
      "Data Structures": { internal: 46, model: 44, total: 90, grade: "O" },
      "Web Technology": { internal: 48, model: 47, total: 95, grade: "O" },
      "AI & Machine Learning": { internal: 45, model: 45, total: 90, grade: "O" },
      "Discrete Mathematics": { internal: 44, model: 43, total: 87, grade: "A+" },
      "Database Management Systems": { internal: 47, model: 46, total: 93, grade: "O" }
    },
    aiRemarks: "Consistent high performer. Recommended for advanced Research Fellowship and competitive hackathons."
  },
  {
    regNo: "URK25AI102",
    name: "Sneha Rachel",
    dept: "AI & Data Science",
    deptCode: "AI&DS",
    sem: "Semester 2",
    attendance: 88,
    internalMarks: 82,
    cgpa: 8.65,
    grade: "A+",
    status: "First Class",
    risk: "Low Risk",
    subjects: {
      "Data Structures": { internal: 42, model: 40, total: 82, grade: "A+" },
      "Web Technology": { internal: 45, model: 46, total: 91, grade: "O" },
      "AI & Machine Learning": { internal: 46, model: 47, total: 93, grade: "O" },
      "Discrete Mathematics": { internal: 38, model: 39, total: 77, grade: "A" },
      "Database Management Systems": { internal: 44, model: 42, total: 86, grade: "A+" }
    },
    aiRemarks: "Strong technical intuition. Discrete Math could benefit from focused problem-solving tutorials."
  },
  {
    regNo: "URK25CS103",
    name: "Jerome David",
    dept: "Computer Science & Engg",
    deptCode: "CSE",
    sem: "Semester 2",
    attendance: 64,
    internalMarks: 52,
    cgpa: 6.12,
    grade: "C",
    status: "Needs Support",
    risk: "High Risk",
    subjects: {
      "Data Structures": { internal: 26, model: 28, total: 54, grade: "C" },
      "Web Technology": { internal: 32, model: 30, total: 62, grade: "B" },
      "AI & Machine Learning": { internal: 24, model: 25, total: 49, grade: "RA" },
      "Discrete Mathematics": { internal: 28, model: 29, total: 57, grade: "C" },
      "Database Management Systems": { internal: 34, model: 33, total: 67, grade: "B+" }
    },
    aiRemarks: "🚨 CRITICAL: Attendance below 75% statutory threshold. Remedial sessions and mentor counseling required."
  },
  {
    regNo: "URK25EC104",
    name: "Keerthana M.",
    dept: "Electronics & Comm.",
    deptCode: "ECE",
    sem: "Semester 2",
    attendance: 91,
    internalMarks: 85,
    cgpa: 8.80,
    grade: "A+",
    status: "Distinction",
    risk: "Low Risk",
    subjects: {
      "Data Structures": { internal: 43, model: 41, total: 84, grade: "A+" },
      "Web Technology": { internal: 44, model: 45, total: 89, grade: "A+" },
      "AI & Machine Learning": { internal: 42, model: 43, total: 85, grade: "A+" },
      "Discrete Mathematics": { internal: 46, model: 47, total: 93, grade: "O" },
      "Database Management Systems": { internal: 45, model: 44, total: 89, grade: "A+" }
    },
    aiRemarks: "Solid academic consistency across all core technical domains."
  },
  {
    regNo: "URK25AI105",
    name: "Rohan Varghese",
    dept: "AI & Data Science",
    deptCode: "AI&DS",
    sem: "Semester 2",
    attendance: 74,
    internalMarks: 63,
    cgpa: 6.95,
    grade: "B+",
    status: "Moderate",
    risk: "Medium Risk",
    subjects: {
      "Data Structures": { internal: 31, model: 34, total: 65, grade: "B+" },
      "Web Technology": { internal: 38, model: 37, total: 75, grade: "A" },
      "AI & Machine Learning": { internal: 34, model: 33, total: 67, grade: "B+" },
      "Discrete Mathematics": { internal: 30, model: 32, total: 62, grade: "B" },
      "Database Management Systems": { internal: 36, model: 35, total: 71, grade: "B+" }
    },
    aiRemarks: "Attendance is borderline (74%). Small boost in attendance correlates with a projected 0.6 CGPA rise."
  },
  {
    regNo: "URK25CS106",
    name: "Divya Sharon",
    dept: "Computer Science & Engg",
    deptCode: "CSE",
    sem: "Semester 2",
    attendance: 97,
    internalMarks: 94,
    cgpa: 9.75,
    grade: "O",
    status: "Distinction",
    risk: "Low Risk",
    subjects: {
      "Data Structures": { internal: 49, model: 48, total: 97, grade: "O" },
      "Web Technology": { internal: 50, model: 48, total: 98, grade: "O" },
      "AI & Machine Learning": { internal: 48, model: 48, total: 96, grade: "O" },
      "Discrete Mathematics": { internal: 49, model: 49, total: 98, grade: "O" },
      "Database Management Systems": { internal: 48, model: 49, total: 97, grade: "O" }
    },
    aiRemarks: "🌟 Top ranker candidate. Nominated for Department Academic Excellence Award."
  },
  {
    regNo: "URK25IT107",
    name: "Pradeep Raj",
    dept: "Information Technology",
    deptCode: "IT",
    sem: "Semester 2",
    attendance: 79,
    internalMarks: 71,
    cgpa: 7.45,
    grade: "A",
    status: "First Class",
    risk: "Low Risk",
    subjects: {
      "Data Structures": { internal: 36, model: 38, total: 74, grade: "A" },
      "Web Technology": { internal: 41, model: 40, total: 81, grade: "A+" },
      "AI & Machine Learning": { internal: 33, model: 34, total: 67, grade: "B+" },
      "Discrete Mathematics": { internal: 34, model: 37, total: 71, grade: "B+" },
      "Database Management Systems": { internal: 39, model: 38, total: 77, grade: "A" }
    },
    aiRemarks: "Good practical project capabilities. Focus required on algorithmic theoretical foundations."
  },
  {
    regNo: "URK25CS108",
    name: "Samuel Paul",
    dept: "Computer Science & Engg",
    deptCode: "CSE",
    sem: "Semester 2",
    attendance: 68,
    internalMarks: 58,
    cgpa: 6.30,
    grade: "B",
    status: "Needs Support",
    risk: "High Risk",
    subjects: {
      "Data Structures": { internal: 29, model: 29, total: 58, grade: "C" },
      "Web Technology": { internal: 35, model: 34, total: 69, grade: "B+" },
      "AI & Machine Learning": { internal: 28, model: 27, total: 55, grade: "C" },
      "Discrete Mathematics": { internal: 26, model: 28, total: 54, grade: "C" },
      "Database Management Systems": { internal: 36, model: 36, total: 72, grade: "B+" }
    },
    aiRemarks: "Flagged by AI Early Warning: High probability of arrear in Discrete Math if no intervention occurs."
  }
];

// Local Storage Helper
function getStudents() {
  const data = localStorage.getItem("karunya_students_data");
  if (!data) {
    localStorage.setItem("karunya_students_data", JSON.stringify(INITIAL_STUDENTS));
    return INITIAL_STUDENTS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_STUDENTS;
  }
}

function saveStudents(students) {
  localStorage.setItem("karunya_students_data", JSON.stringify(students));
}

function resetStudents() {
  localStorage.setItem("karunya_students_data", JSON.stringify(INITIAL_STUDENTS));
  showToast("Demo student data restored to initial state!");
  if (typeof renderStudentsTable === "function") {
    renderStudentsTable();
  }
  if (typeof refreshDashboardMetrics === "function") {
    refreshDashboardMetrics();
  }
}

// Toast Notification
function showToast(message, type = "success") {
  const existing = document.getElementById("analytics-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "analytics-toast";
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.right = "24px";
  toast.style.background = type === "success" ? "#065f46" : "#991b1b";
  toast.style.color = "#ffffff";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 10px 15px -3px rgba(0,0,0,0.2)";
  toast.style.zIndex = "9999";
  toast.style.fontSize = "14px";
  toast.style.fontWeight = "600";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "8px";
  toast.innerHTML = `<span>${type === "success" ? "✓" : "⚠️"}</span> ${message}`;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// Dashboard Logic
// ==========================================
function initDashboard() {
  const students = getStudents();

  // Metrics Calculation
  const total = students.length;
  const avgCgpa = (students.reduce((acc, s) => acc + s.cgpa, 0) / total).toFixed(2);
  const distinctionCount = students.filter(s => s.cgpa >= 8.5).length;
  const distinctionRate = Math.round((distinctionCount / total) * 100);
  const atRiskCount = students.filter(s => s.risk === "High Risk" || s.attendance < 75).length;

  const totalEl = document.getElementById("dash-total-students");
  const cgpaEl = document.getElementById("dash-avg-cgpa");
  const distEl = document.getElementById("dash-distinction-rate");
  const riskEl = document.getElementById("dash-at-risk");

  if (totalEl) totalEl.textContent = total;
  if (cgpaEl) cgpaEl.textContent = avgCgpa;
  if (distEl) distEl.textContent = `${distinctionRate}%`;
  if (riskEl) riskEl.textContent = atRiskCount;

  // Render Top Achievers Leaderboard
  const leaderboardBody = document.getElementById("leaderboard-body");
  if (leaderboardBody) {
    const sorted = [...students].sort((a, b) => b.cgpa - a.cgpa).slice(0, 5);
    leaderboardBody.innerHTML = sorted.map((s, idx) => `
      <tr>
        <td><strong>#${idx + 1}</strong></td>
        <td>
          <div style="font-weight: 600;">${s.name}</div>
          <small style="color: var(--text-muted);">${s.regNo}</small>
        </td>
        <td><span class="badge badge-primary">${s.deptCode}</span></td>
        <td><strong>${s.cgpa.toFixed(2)}</strong></td>
        <td>
          <span class="badge ${s.attendance >= 85 ? 'badge-success' : (s.attendance >= 75 ? 'badge-warning' : 'badge-danger')}">
            ${s.attendance}%
          </span>
        </td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="viewStudentDetails('${s.regNo}')">
            View Analysis
          </button>
        </td>
      </tr>
    `).join("");
  }

  // Initialize Charts with Chart.js
  if (window.Chart) {
    // 1. Grade Distribution Chart
    const gradeCanvas = document.getElementById("chart-grades");
    if (gradeCanvas) {
      const gradeCounts = { "O (>=9.0)": 0, "A+ (8.0-8.9)": 0, "A (7.0-7.9)": 0, "B/B+ (6.0-6.9)": 0, "Arrear/Risk (<6.0)": 0 };
      students.forEach(s => {
        if (s.cgpa >= 9.0) gradeCounts["O (>=9.0)"]++;
        else if (s.cgpa >= 8.0) gradeCounts["A+ (8.0-8.9)"]++;
        else if (s.cgpa >= 7.0) gradeCounts["A (7.0-7.9)"]++;
        else if (s.cgpa >= 6.0) gradeCounts["B/B+ (6.0-6.9)"]++;
        else gradeCounts["Arrear/Risk (<6.0)"]++;
      });

      new Chart(gradeCanvas.getContext("2d"), {
        type: "doughnut",
        data: {
          labels: Object.keys(gradeCounts),
          datasets: [{
            data: Object.values(gradeCounts),
            backgroundColor: ["#10b981", "#3b82f6", "#6366f1", "#f59e0b", "#ef4444"],
            borderWidth: 2,
            borderColor: "#ffffff"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "bottom", labels: { boxWidth: 12, font: { family: "Plus Jakarta Sans" } } }
          }
        }
      });
    }

    // 2. Subject Performance Bar Chart
    const subjectsCanvas = document.getElementById("chart-subjects");
    if (subjectsCanvas) {
      const subjectsList = ["Data Structures", "Web Technology", "AI & ML", "Discrete Math", "DBMS"];
      // Compute averages
      const subjectAvgs = [83.5, 87.2, 81.0, 78.4, 85.6];

      new Chart(subjectsCanvas.getContext("2d"), {
        type: "bar",
        data: {
          labels: subjectsList,
          datasets: [{
            label: "Class Average Score (%)",
            data: subjectAvgs,
            backgroundColor: "#1a4fba",
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, max: 100 }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }

    // 3. Attendance vs Performance Correlation
    const trendCanvas = document.getElementById("chart-correlation");
    if (trendCanvas) {
      const scatterData = students.map(s => ({ x: s.attendance, y: s.cgpa }));
      new Chart(trendCanvas.getContext("2d"), {
        type: "scatter",
        data: {
          datasets: [{
            label: "Students (Attendance % vs CGPA)",
            data: scatterData,
            backgroundColor: "#6366f1",
            pointRadius: 6,
            pointHoverRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { title: { display: true, text: "Attendance Rate (%)" }, min: 50, max: 100 },
            y: { title: { display: true, text: "Cumulative GPA (CGPA)" }, min: 4, max: 10 }
          }
        }
      });
    }
  }
}

// ==========================================
// Students Table & Management Logic
// ==========================================
function renderStudentsTable() {
  const tableBody = document.getElementById("students-tbody");
  if (!tableBody) return;

  const students = getStudents();
  const searchVal = (document.getElementById("student-search")?.value || "").toLowerCase().trim();
  const deptFilter = document.getElementById("filter-dept")?.value || "ALL";
  const tierFilter = document.getElementById("filter-tier")?.value || "ALL";

  const filtered = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchVal) || s.regNo.toLowerCase().includes(searchVal);
    const matchesDept = deptFilter === "ALL" || s.deptCode === deptFilter;
    let matchesTier = true;
    if (tierFilter === "DISTINCTION") matchesTier = s.cgpa >= 8.5;
    else if (tierFilter === "FIRST_CLASS") matchesTier = s.cgpa >= 7.0 && s.cgpa < 8.5;
    else if (tierFilter === "AT_RISK") matchesTier = s.risk === "High Risk" || s.attendance < 75;
    return matchesSearch && matchesDept && matchesTier;
  });

  const countBadge = document.getElementById("student-count-badge");
  if (countBadge) countBadge.textContent = `${filtered.length} of ${students.length} students`;

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 40px; color: var(--text-muted);">
          🔍 No student records found matching the criteria.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(s => {
    let riskBadge = `<span class="badge badge-success">🟢 Normal</span>`;
    if (s.risk === "High Risk" || s.attendance < 75) {
      riskBadge = `<span class="badge badge-danger">🔴 At-Risk</span>`;
    } else if (s.risk === "Medium Risk") {
      riskBadge = `<span class="badge badge-warning">🟡 Attention</span>`;
    }

    let attClass = "high";
    if (s.attendance < 75) attClass = "low";
    else if (s.attendance < 85) attClass = "medium";

    return `
      <tr>
        <td><strong>${s.regNo}</strong></td>
        <td>
          <div style="font-weight: 600;">${s.name}</div>
          <small style="color: var(--text-muted);">${s.sem}</small>
        </td>
        <td><span class="badge badge-primary">${s.deptCode}</span></td>
        <td>
          <div class="progress-bar-wrap">
            <span style="font-weight: 600; font-size: 13px;">${s.attendance}%</span>
            <div class="progress-track">
              <div class="progress-fill ${attClass}" style="width: ${s.attendance}%;"></div>
            </div>
          </div>
        </td>
        <td><strong>${s.internalMarks}/100</strong></td>
        <td>
          <span style="font-weight: 800; color: ${s.cgpa >= 8.5 ? '#10b981' : (s.cgpa < 7 ? '#ef4444' : '#1a4fba')};">
            ${s.cgpa.toFixed(2)}
          </span>
          <span class="badge badge-primary" style="margin-left: 6px;">${s.grade}</span>
        </td>
        <td>${riskBadge}</td>
        <td>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" onclick="viewStudentDetails('${s.regNo}')">View Details</button>
            <button class="btn btn-danger btn-sm" title="Delete record" onclick="deleteStudent('${s.regNo}')">✕</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// Student Details Modal
function viewStudentDetails(regNo) {
  const students = getStudents();
  const student = students.find(s => s.regNo === regNo);
  if (!student) return;

  const modal = document.getElementById("student-detail-modal");
  const modalContent = document.getElementById("student-detail-body");
  if (!modal || !modalContent) return;

  let subjectsHtml = "";
  if (student.subjects) {
    subjectsHtml = `
      <div style="margin-top: 18px;">
        <h4 style="font-size: 15px; margin-bottom: 10px; color: var(--primary);">Subject Breakdown & Assessment</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <thead>
            <tr style="background: #f1f5f9; text-align: left;">
              <th style="padding: 8px;">Subject</th>
              <th style="padding: 8px;">Internal (50)</th>
              <th style="padding: 8px;">Model Exam (50)</th>
              <th style="padding: 8px;">Total (100)</th>
              <th style="padding: 8px;">Grade</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(student.subjects).map(([subj, m]) => `
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 8px; font-weight: 600;">${subj}</td>
                <td style="padding: 8px;">${m.internal}</td>
                <td style="padding: 8px;">${m.model}</td>
                <td style="padding: 8px; font-weight: 700;">${m.total}</td>
                <td style="padding: 8px;"><span class="badge ${m.grade === 'RA' ? 'badge-danger' : 'badge-primary'}">${m.grade}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
      <div>
        <h3 style="font-size: 20px; font-weight: 800; color: var(--text-main);">${student.name}</h3>
        <p style="color: var(--text-muted); font-size: 14px;">${student.regNo} • ${student.dept} • ${student.sem}</p>
      </div>
      <div>
        <span class="badge ${student.risk === 'High Risk' ? 'badge-danger' : 'badge-success'}" style="font-size: 14px; padding: 6px 14px;">
          ${student.risk}
        </span>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px;">
      <div style="background: var(--bg-main); padding: 14px; border-radius: 8px; text-align: center;">
        <div style="font-size: 12px; color: var(--text-muted);">Current CGPA</div>
        <div style="font-size: 24px; font-weight: 800; color: var(--primary);">${student.cgpa.toFixed(2)}</div>
        <div style="font-size: 11px; color: var(--text-muted);">Letter Grade: <strong>${student.grade}</strong></div>
      </div>
      <div style="background: var(--bg-main); padding: 14px; border-radius: 8px; text-align: center;">
        <div style="font-size: 12px; color: var(--text-muted);">Attendance</div>
        <div style="font-size: 24px; font-weight: 800; color: ${student.attendance < 75 ? '#ef4444' : '#10b981'};">${student.attendance}%</div>
        <div style="font-size: 11px; color: var(--text-muted);">${student.attendance >= 75 ? 'Meets 75% rule' : 'Deficit <75%'}</div>
      </div>
      <div style="background: var(--bg-main); padding: 14px; border-radius: 8px; text-align: center;">
        <div style="font-size: 12px; color: var(--text-muted);">Internal Average</div>
        <div style="font-size: 24px; font-weight: 800; color: #6366f1;">${student.internalMarks}%</div>
        <div style="font-size: 11px; color: var(--text-muted);">Classwork & Lab</div>
      </div>
    </div>

    <div style="background: var(--primary-subtle); border-left: 4px solid var(--primary); padding: 14px; border-radius: 6px; margin-bottom: 16px;">
      <div style="font-size: 12px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">🤖 AI Diagnostics & Predictive Advisory:</div>
      <p style="font-size: 13px; color: var(--text-main); margin-top: 4px;">${student.aiRemarks || "Performance is consistent with university benchmarks."}</p>
    </div>

    ${subjectsHtml}
  `;

  modal.classList.add("active");
}

function closeStudentModal() {
  const modal = document.getElementById("student-detail-modal");
  if (modal) modal.classList.remove("active");
}

function openAddStudentModal() {
  const modal = document.getElementById("add-student-modal");
  if (modal) modal.classList.add("active");
}

function closeAddStudentModal() {
  const modal = document.getElementById("add-student-modal");
  if (modal) modal.classList.remove("active");
}

function handleAddStudentSubmit(e) {
  e.preventDefault();
  const regNo = document.getElementById("new-regno").value.trim().toUpperCase();
  const name = document.getElementById("new-name").value.trim();
  const dept = document.getElementById("new-dept").value;
  const sem = document.getElementById("new-sem").value;
  const attendance = parseInt(document.getElementById("new-attendance").value, 10);
  const internal = parseInt(document.getElementById("new-internal").value, 10);
  const cgpa = parseFloat(document.getElementById("new-cgpa").value);

  if (!regNo || !name || isNaN(attendance) || isNaN(internal) || isNaN(cgpa)) {
    alert("Please fill in all required fields accurately.");
    return;
  }

  const deptCodes = {
    "Computer Science & Engg": "CSE",
    "AI & Data Science": "AI&DS",
    "Electronics & Comm.": "ECE",
    "Information Technology": "IT"
  };

  let grade = "C";
  if (cgpa >= 9.0) grade = "O";
  else if (cgpa >= 8.0) grade = "A+";
  else if (cgpa >= 7.0) grade = "A";
  else if (cgpa >= 6.0) grade = "B+";

  let risk = "Low Risk";
  if (attendance < 75 || cgpa < 6.0) risk = "High Risk";
  else if (attendance < 80 || cgpa < 7.0) risk = "Medium Risk";

  const newStudent = {
    regNo,
    name,
    dept,
    deptCode: deptCodes[dept] || "CSE",
    sem,
    attendance,
    internalMarks: internal,
    cgpa,
    grade,
    status: cgpa >= 8.5 ? "Distinction" : (cgpa >= 7.0 ? "First Class" : "Needs Support"),
    risk,
    subjects: {
      "Data Structures": { internal: Math.round(internal * 0.48), model: Math.round(internal * 0.46), total: internal, grade },
      "Web Technology": { internal: Math.round(internal * 0.5), model: Math.round(internal * 0.48), total: internal, grade },
      "AI & Machine Learning": { internal: Math.round(internal * 0.46), model: Math.round(internal * 0.45), total: internal, grade }
    },
    aiRemarks: risk === "High Risk" ? "⚠️ Needs active academic mentoring." : "Regular progress maintained."
  };

  const students = getStudents();
  // Prevent duplicate regNo
  const existingIdx = students.findIndex(s => s.regNo === regNo);
  if (existingIdx >= 0) {
    students[existingIdx] = newStudent;
  } else {
    students.unshift(newStudent);
  }

  saveStudents(students);
  closeAddStudentModal();
  e.target.reset();
  showToast(`Student ${name} (${regNo}) saved successfully!`);
  renderStudentsTable();
}

function deleteStudent(regNo) {
  if (!confirm(`Are you sure you want to delete record ${regNo}?`)) return;
  const students = getStudents().filter(s => s.regNo !== regNo);
  saveStudents(students);
  showToast(`Record ${regNo} removed.`);
  renderStudentsTable();
}

// ==========================================
// CSV Export Utility
// ==========================================
function exportStudentsToCSV() {
  const students = getStudents();
  let csv = "Register No,Full Name,Department,Semester,Attendance %,Internal Marks,CGPA,Grade,AI Risk Status\n";
  students.forEach(s => {
    csv += `"${s.regNo}","${s.name}","${s.dept}","${s.sem}",${s.attendance},${s.internalMarks},${s.cgpa},"${s.grade}","${s.risk}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Karunya_Student_Performance_Report_${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("CSV Performance Report downloaded successfully!");
}

// ==========================================
// Interactive Grade / GPA Calculator
// ==========================================
function calculateQuickGpa() {
  const m1 = parseFloat(document.getElementById("calc-m1")?.value) || 0;
  const m2 = parseFloat(document.getElementById("calc-m2")?.value) || 0;
  const m3 = parseFloat(document.getElementById("calc-m3")?.value) || 0;
  const m4 = parseFloat(document.getElementById("calc-m4")?.value) || 0;
  const m5 = parseFloat(document.getElementById("calc-m5")?.value) || 0;

  const marks = [m1, m2, m3, m4, m5];
  const avg = marks.reduce((a, b) => a + b, 0) / marks.length;

  let gpa = 0;
  let letter = "RA";
  if (avg >= 90) { gpa = 10.0; letter = "O (Outstanding)"; }
  else if (avg >= 80) { gpa = 9.0; letter = "A+ (Excellent)"; }
  else if (avg >= 70) { gpa = 8.0; letter = "A (Very Good)"; }
  else if (avg >= 60) { gpa = 7.0; letter = "B+ (Good)"; }
  else if (avg >= 50) { gpa = 6.0; letter = "B (Above Average)"; }
  else { gpa = 0.0; letter = "RA (Re-appear)"; }

  const scoreEl = document.getElementById("calc-result-score");
  const letterEl = document.getElementById("calc-result-letter");
  if (scoreEl) scoreEl.textContent = avg.toFixed(1) + "%";
  if (letterEl) letterEl.textContent = `Projected GPA: ${gpa.toFixed(1)} / 10.0 • Grade: ${letter}`;
}

// Global Event Listeners initialization
document.addEventListener("DOMContentLoaded", () => {
  // Check which page we are on
  if (document.getElementById("dash-total-students")) {
    initDashboard();
  }

  if (document.getElementById("students-tbody")) {
    renderStudentsTable();

    const searchInput = document.getElementById("student-search");
    if (searchInput) {
      searchInput.addEventListener("input", renderStudentsTable);
    }

    const deptFilter = document.getElementById("filter-dept");
    if (deptFilter) {
      deptFilter.addEventListener("change", renderStudentsTable);
    }

    const tierFilter = document.getElementById("filter-tier");
    if (tierFilter) {
      tierFilter.addEventListener("change", renderStudentsTable);
    }

    const addForm = document.getElementById("add-student-form");
    if (addForm) {
      addForm.addEventListener("submit", handleAddStudentSubmit);
    }
  }

  // Reports page chart init
  if (document.getElementById("chart-report-distribution") && window.Chart) {
    initReportsPage();
  }
});

function initReportsPage() {
  const students = getStudents();
  const total = students.length;
  const passCount = students.filter(s => s.cgpa >= 6.0).length;
  const failCount = total - passCount;

  const canvas = document.getElementById("chart-report-distribution");
  if (canvas) {
    new Chart(canvas.getContext("2d"), {
      type: "pie",
      data: {
        labels: ["Passed / Promoted", "Academic Risk / Remedial"],
        datasets: [{
          data: [passCount, failCount],
          backgroundColor: ["#10b981", "#ef4444"],
          borderWidth: 2,
          borderColor: "#fff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom" }
        }
      }
    });
  }
}
