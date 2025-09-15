/**
 * Tutorial Escape Platform - Main Application
 * Core functionality for skill assessment and project management
 */

// Hardcoded Assessment Questions (3-5 simple questions)
const ASSESSMENT_QUESTIONS = [
    {
        id: "q1",
        question: "How comfortable are you with HTML and CSS?",
        options: [
            "I'm just starting out with basic tags and styling",
            "I can create simple layouts and style elements",
            "I'm comfortable with responsive design and CSS Grid/Flexbox",
            "I can build complex layouts and animations"
        ],
        skillWeights: {
            beginner: [3, 2, 1, 0],
            intermediate: [1, 3, 2, 1],
            advanced: [0, 1, 2, 3]
        }
    },
    {
        id: "q2",
        question: "What's your experience with JavaScript?",
        options: [
            "I'm new to programming and JavaScript",
            "I understand variables, functions, and basic DOM manipulation",
            "I can work with APIs, events, and modern JavaScript features",
            "I'm comfortable with advanced concepts like closures and async programming"
        ],
        skillWeights: {
            beginner: [3, 2, 1, 0],
            intermediate: [1, 3, 2, 1],
            advanced: [0, 1, 2, 3]
        }
    },
    {
        id: "q3",
        question: "How do you typically learn new programming concepts?",
        options: [
            "I follow step-by-step tutorials and copy code examples",
            "I watch tutorials but try to modify the examples",
            "I read documentation and experiment with small projects",
            "I dive into source code and build projects from scratch"
        ],
        skillWeights: {
            beginner: [3, 2, 1, 0],
            intermediate: [2, 3, 2, 1],
            advanced: [0, 1, 2, 3]
        }
    },
    {
        id: "q4",
        question: "What best describes your current coding situation?",
        options: [
            "I've been watching tutorials but haven't built anything on my own",
            "I've built small projects following tutorials closely",
            "I've built a few projects with some original features",
            "I regularly build projects and contribute to open source"
        ],
        skillWeights: {
            beginner: [3, 2, 1, 0],
            intermediate: [1, 3, 2, 1],
            advanced: [0, 1, 2, 3]
        }
    }
];

// Sample Project Templates (1-2 projects with 3-5 milestones each)
const PROJECT_TEMPLATES = {
    "todo-app": {
        id: "todo-app",
        name: "Personal Task Manager",
        description: "Build a clean, functional to-do list app that helps you organize daily tasks. Perfect for learning DOM manipulation, local storage, and user interaction patterns.",
        skillLevel: "beginner",
        techStack: ["HTML", "CSS", "JavaScript"],
        estimatedHours: 8,
        milestones: [
            {
                id: "m1",
                title: "Create the basic HTML structure",
                description: "Set up the foundation with input field, task list, and basic styling",
                hint: "Start with a simple form and an empty list container",
                estimatedTime: 2,
                helpResource: {
                    title: "HTML Forms - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
                    type: "documentation",
                    description: "Learn about HTML form elements and structure"
                }
            },
            {
                id: "m2",
                title: "Add task creation functionality",
                description: "Implement JavaScript to add new tasks when the user submits the form",
                hint: "Use addEventListener for form submission and createElement for new tasks",
                estimatedTime: 2,
                helpResource: {
                    title: "DOM Manipulation - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
                    type: "documentation",
                    description: "Understanding how to create and modify HTML elements with JavaScript"
                }
            },
            {
                id: "m3",
                title: "Implement task completion and deletion",
                description: "Add checkboxes to mark tasks complete and buttons to delete tasks",
                hint: "Use event delegation to handle clicks on dynamically created elements",
                estimatedTime: 2,
                helpResource: {
                    title: "Event Handling - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
                    type: "documentation",
                    description: "Learn about event listeners and event delegation"
                }
            },
            {
                id: "m4",
                title: "Add local storage persistence",
                description: "Save tasks to browser storage so they persist between sessions",
                hint: "Use JSON.stringify and JSON.parse with localStorage",
                estimatedTime: 2,
                helpResource: {
                    title: "Web Storage API - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
                    type: "documentation",
                    description: "Learn how to store data in the browser"
                }
            }
        ]
    },
    "weather-app": {
        id: "weather-app",
        name: "Weather Dashboard",
        description: "Create a responsive weather app that fetches real-time data and displays it beautifully. Great for learning API integration and responsive design.",
        skillLevel: "intermediate",
        techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
        estimatedHours: 12,
        milestones: [
            {
                id: "m1",
                title: "Build responsive layout and design",
                description: "Create an attractive, mobile-first design with CSS Grid and Flexbox",
                hint: "Start with mobile design first, then add desktop styles",
                estimatedTime: 3,
                helpResource: {
                    title: "CSS Grid Layout - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
                    type: "documentation",
                    description: "Master CSS Grid for complex layouts"
                }
            },
            {
                id: "m2",
                title: "Integrate weather API",
                description: "Connect to a weather service API and fetch current weather data",
                hint: "Use fetch() API and handle both success and error responses",
                estimatedTime: 3,
                helpResource: {
                    title: "Fetch API - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
                    type: "documentation",
                    description: "Learn how to make HTTP requests in JavaScript"
                }
            },
            {
                id: "m3",
                title: "Display weather data dynamically",
                description: "Parse API response and update the UI with current weather information",
                hint: "Create reusable functions to update different parts of the interface",
                estimatedTime: 3,
                helpResource: {
                    title: "Working with JSON - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON",
                    type: "documentation",
                    description: "Understanding JSON data and how to work with it"
                }
            },
            {
                id: "m4",
                title: "Add location search functionality",
                description: "Allow users to search for weather in different cities",
                hint: "Combine user input validation with API calls",
                estimatedTime: 2,
                helpResource: {
                    title: "Form Validation - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",
                    type: "documentation",
                    description: "Learn about client-side form validation"
                }
            },
            {
                id: "m5",
                title: "Add error handling and loading states",
                description: "Implement proper error messages and loading indicators for better UX",
                hint: "Show loading spinners during API calls and friendly error messages",
                estimatedTime: 1,
                helpResource: {
                    title: "Error Handling - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
                    type: "documentation",
                    description: "Learn about try-catch and error handling patterns"
                }
            }
        ]
    }
};

// Assessment Manager - handles skill assessment logic
class AssessmentManager {
    static calculateSkillLevel(responses) {
        const scores = {
            beginner: 0,
            intermediate: 0,
            advanced: 0
        };

        // Calculate weighted scores based on responses
        responses.forEach((response, questionIndex) => {
            const question = ASSESSMENT_QUESTIONS[questionIndex];
            if (question && question.skillWeights) {
                const weights = question.skillWeights;
                scores.beginner += weights.beginner[response] || 0;
                scores.intermediate += weights.intermediate[response] || 0;
                scores.advanced += weights.advanced[response] || 0;
            }
        });

        // Determine the highest scoring skill level
        const maxScore = Math.max(scores.beginner, scores.intermediate, scores.advanced);
        
        if (scores.advanced === maxScore) return 'advanced';
        if (scores.intermediate === maxScore) return 'intermediate';
        return 'beginner';
    }

    static getProjectRecommendation(skillLevel) {
        // Return appropriate project based on skill level
        switch (skillLevel) {
            case 'advanced':
            case 'intermediate':
                return PROJECT_TEMPLATES['weather-app'];
            case 'beginner':
            default:
                return PROJECT_TEMPLATES['todo-app'];
        }
    }

    static processAssessmentResults(responses) {
        const skillLevel = this.calculateSkillLevel(responses);
        const recommendedProject = this.getProjectRecommendation(skillLevel);
        
        return {
            skillLevel,
            recommendedProject: recommendedProject.id,
            explanation: this.getSkillLevelExplanation(skillLevel),
            projectDetails: recommendedProject
        };
    }

    static getSkillLevelExplanation(skillLevel) {
        const explanations = {
            beginner: "You're ready to start building! We recommend starting with a foundational project to practice core web development skills.",
            intermediate: "You have solid fundamentals! Time to challenge yourself with a project that involves API integration and more complex interactions.",
            advanced: "You're experienced! You can handle complex projects, but we still recommend starting with something focused to break the tutorial habit."
        };
        
        return explanations[skillLevel] || explanations.beginner;
    }
}

// Progress Manager - handles project progress tracking
class ProgressManager {
    static createNewProgress(projectId) {
        return {
            projectId,
            completedMilestones: [],
            currentMilestone: PROJECT_TEMPLATES[projectId]?.milestones[0]?.id || null,
            startDate: new Date().toISOString(),
            lastActivity: new Date().toISOString(),
            totalProgress: 0
        };
    }

    static updateProgress(progress, milestoneId, completed = true) {
        const updatedProgress = { ...progress };
        
        if (completed && !updatedProgress.completedMilestones.includes(milestoneId)) {
            updatedProgress.completedMilestones.push(milestoneId);
        } else if (!completed) {
            updatedProgress.completedMilestones = updatedProgress.completedMilestones.filter(
                id => id !== milestoneId
            );
        }

        // Update current milestone to next incomplete one
        const project = PROJECT_TEMPLATES[updatedProgress.projectId];
        if (project) {
            const nextMilestone = project.milestones.find(
                milestone => !updatedProgress.completedMilestones.includes(milestone.id)
            );
            updatedProgress.currentMilestone = nextMilestone?.id || null;
        }

        // Calculate total progress percentage
        const totalMilestones = project?.milestones.length || 1;
        updatedProgress.totalProgress = Math.round(
            (updatedProgress.completedMilestones.length / totalMilestones) * 100
        );

        updatedProgress.lastActivity = new Date().toISOString();
        
        return updatedProgress;
    }

    static getMilestoneById(projectId, milestoneId) {
        const project = PROJECT_TEMPLATES[projectId];
        return project?.milestones.find(milestone => milestone.id === milestoneId) || null;
    }

    static getProjectById(projectId) {
        return PROJECT_TEMPLATES[projectId] || null;
    }
}

// Application state management
class AppState {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.userSession = this.loadUserSession();
        this.projectProgress = this.loadProjectProgress();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('project.html')) return 'project';
        return 'index';
    }

    loadUserSession() {
        try {
            const session = localStorage.getItem('tutorialEscape_userSession');
            return session ? JSON.parse(session) : null;
        } catch (error) {
            console.warn('Failed to load user session:', error);
            return null;
        }
    }

    saveUserSession(sessionData) {
        try {
            localStorage.setItem('tutorialEscape_userSession', JSON.stringify(sessionData));
            this.userSession = sessionData;
        } catch (error) {
            console.error('Failed to save user session:', error);
        }
    }

    loadProjectProgress() {
        try {
            const progress = localStorage.getItem('tutorialEscape_projectProgress');
            return progress ? JSON.parse(progress) : null;
        } catch (error) {
            console.warn('Failed to load project progress:', error);
            return null;
        }
    }

    saveProjectProgress(progressData) {
        try {
            localStorage.setItem('tutorialEscape_projectProgress', JSON.stringify(progressData));
            this.projectProgress = progressData;
        } catch (error) {
            console.error('Failed to save project progress:', error);
        }
    }

    clearAllData() {
        try {
            localStorage.removeItem('tutorialEscape_userSession');
            localStorage.removeItem('tutorialEscape_projectProgress');
            this.userSession = null;
            this.projectProgress = null;
        } catch (error) {
            console.error('Failed to clear data:', error);
        }
    }
}

// Utility functions
const utils = {
    // DOM helper functions
    getElementById(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with id '${id}' not found`);
        }
        return element;
    },

    querySelector(selector) {
        return document.querySelector(selector);
    },

    querySelectorAll(selector) {
        return document.querySelectorAll(selector);
    },

    // Class manipulation helpers
    addClass(element, className) {
        if (element) element.classList.add(className);
    },

    removeClass(element, className) {
        if (element) element.classList.remove(className);
    },

    toggleClass(element, className) {
        if (element) element.classList.toggle(className);
    },

    // Event handling helpers
    addEventListener(element, event, handler) {
        if (element) {
            element.addEventListener(event, handler);
        }
    },

    // Form validation helpers
    validateRequired(value) {
        return value && value.trim().length > 0;
    },

    // Date helpers
    getCurrentISODate() {
        return new Date().toISOString();
    },

    // Error handling
    handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        // In a real app, this might send to error tracking service
    }
};

// Page-specific initialization
class PageManager {
    constructor(appState) {
        this.appState = appState;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializePage());
        } else {
            this.initializePage();
        }
    }

    initializePage() {
        try {
            switch (this.appState.currentPage) {
                case 'index':
                    this.initializeIndexPage();
                    break;
                case 'project':
                    this.initializeProjectPage();
                    break;
                default:
                    console.warn('Unknown page type:', this.appState.currentPage);
            }
        } catch (error) {
            utils.handleError(error, 'PageManager.initializePage');
        }
    }

    initializeIndexPage() {
        console.log('Initializing index page...');
        
        // Check if user has already completed assessment
        if (this.appState.userSession && this.appState.userSession.assessmentCompleted) {
            this.showExistingRecommendation();
        } else {
            this.initializeAssessment();
        }
    }

    initializeProjectPage() {
        console.log('Initializing project page...');
        
        // Check if user has a current project
        if (!this.appState.userSession || !this.appState.userSession.currentProject) {
            // Redirect to index if no project
            window.location.href = 'index.html';
            return;
        }

        this.loadProjectDashboard();
    }

    initializeAssessment() {
        console.log('Loading assessment questions...');
        
        // Load assessment questions into the form
        this.loadAssessmentQuestions();
        
        // Set up form submission handler
        const assessmentForm = utils.getElementById('assessment-form');
        if (assessmentForm) {
            utils.addEventListener(assessmentForm, 'submit', (e) => {
                e.preventDefault();
                this.handleAssessmentSubmission();
            });
        }

        // Set up real-time validation
        this.setupFormValidation();
    }

    loadAssessmentQuestions() {
        const questionsContainer = utils.getElementById('questions-container');
        if (!questionsContainer) {
            console.warn('Questions container not found');
            return;
        }

        // Clear existing content
        questionsContainer.innerHTML = '';

        // Create questions HTML with enhanced styling
        ASSESSMENT_QUESTIONS.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-group';
            
            const questionTitle = document.createElement('h3');
            questionTitle.className = 'question-title';
            questionTitle.textContent = `${index + 1}. ${question.question}`;
            
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'question-options';
            
            question.options.forEach((option, optionIndex) => {
                const optionLabel = document.createElement('label');
                optionLabel.className = 'option-label';
                
                const optionInput = document.createElement('input');
                optionInput.type = 'radio';
                optionInput.name = `question_${question.id}`;
                optionInput.value = optionIndex;
                optionInput.required = true;
                
                // Add change event listener for smooth interactions
                utils.addEventListener(optionInput, 'change', () => {
                    this.updateFormProgress();
                });
                
                const optionText = document.createElement('span');
                optionText.textContent = option;
                
                optionLabel.appendChild(optionInput);
                optionLabel.appendChild(optionText);
                optionsDiv.appendChild(optionLabel);
            });
            
            questionDiv.appendChild(questionTitle);
            questionDiv.appendChild(optionsDiv);
            questionsContainer.appendChild(questionDiv);
        });

        // Enable submit button
        const submitBtn = utils.getElementById('submit-assessment');
        if (submitBtn) {
            submitBtn.disabled = false;
        }
    }

    handleAssessmentSubmission() {
        console.log('Processing assessment submission...');
        
        // Show loading state
        this.setSubmitButtonLoading(true);
        
        // Collect responses
        const responses = [];
        let allAnswered = true;
        
        ASSESSMENT_QUESTIONS.forEach((question) => {
            const selectedOption = document.querySelector(`input[name="question_${question.id}"]:checked`);
            if (selectedOption) {
                responses.push(parseInt(selectedOption.value));
            } else {
                allAnswered = false;
            }
        });

        if (!allAnswered) {
            this.showValidationError('Please answer all questions before submitting.');
            this.setSubmitButtonLoading(false);
            return;
        }

        // Simulate processing time for better UX
        setTimeout(() => {
            // Process assessment results
            const results = AssessmentManager.processAssessmentResults(responses);
            
            // Save user session
            const sessionData = {
                skillLevel: results.skillLevel,
                currentProject: results.recommendedProject,
                assessmentCompleted: true,
                createdAt: new Date().toISOString()
            };
            
            this.appState.saveUserSession(sessionData);
            
            // Create initial project progress
            const initialProgress = ProgressManager.createNewProgress(results.recommendedProject);
            this.appState.saveProjectProgress(initialProgress);
            
            // Hide loading state
            this.setSubmitButtonLoading(false);
            
            // Show results with smooth transition
            this.showAssessmentResults(results);
        }, 1500); // 1.5 second delay for better perceived performance
    }

    showAssessmentResults(results) {
        // Hide assessment section with smooth transition
        const assessmentSection = utils.getElementById('assessment-section');
        const resultsSection = utils.getElementById('results-section');
        
        if (assessmentSection && resultsSection) {
            // Fade out assessment
            assessmentSection.style.opacity = '0';
            assessmentSection.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                assessmentSection.classList.add('hidden');
                
                // Populate results
                this.populateProjectRecommendation(results);
                
                // Show results with animation
                resultsSection.classList.remove('hidden');
                setTimeout(() => {
                    resultsSection.style.opacity = '1';
                    resultsSection.style.transform = 'translateY(0)';
                }, 50);
            }, 300);
        }
    }

    populateProjectRecommendation(results) {
        const recommendationContainer = utils.getElementById('project-recommendation');
        if (!recommendationContainer) return;

        const project = results.projectDetails;
        
        recommendationContainer.innerHTML = `
            <div class="project-card">
                <h3 class="project-name">${project.name}</h3>
                <p class="skill-explanation">${results.explanation}</p>
                <p class="project-description">${project.description}</p>
                
                <div class="project-meta">
                    <div class="meta-item">
                        <span class="tech-stack">💻 ${project.techStack.join(', ')}</span>
                    </div>
                    <div class="meta-item">
                        <span class="estimated-time">⏱️ ~${project.estimatedHours} hours</span>
                    </div>
                </div>
                
                <div class="milestone-preview">
                    <h4>What you'll build:</h4>
                    <ul class="milestone-list">
                        ${project.milestones.slice(0, 3).map(milestone => 
                            `<li class="milestone-item">${milestone.title}</li>`
                        ).join('')}
                        ${project.milestones.length > 3 ? '<li class="milestone-item">And more...</li>' : ''}
                    </ul>
                </div>
            </div>
        `;

        // Set up retake assessment button
        const retakeBtn = utils.getElementById('retake-assessment');
        if (retakeBtn) {
            utils.addEventListener(retakeBtn, 'click', () => {
                this.retakeAssessment();
            });
        }
    }

    showExistingRecommendation() {
        console.log('User has existing recommendation');
        
        const userSession = this.appState.userSession;
        if (!userSession || !userSession.currentProject) return;

        const project = ProgressManager.getProjectById(userSession.currentProject);
        const progress = this.appState.projectProgress;
        
        if (!project) return;

        // Hide assessment and show existing project
        const assessmentSection = utils.getElementById('assessment-section');
        const resultsSection = utils.getElementById('results-section');
        
        if (assessmentSection) {
            assessmentSection.classList.add('hidden');
        }
        
        if (resultsSection) {
            resultsSection.classList.remove('hidden');
            
            // Update results section for existing user
            const recommendationContainer = utils.getElementById('project-recommendation');
            if (recommendationContainer) {
                recommendationContainer.innerHTML = `
                    <div class="project-card">
                        <h3 class="project-name">Welcome Back!</h3>
                        <p class="skill-explanation">Continue working on your current project</p>
                        
                        <div class="current-project">
                            <h4>${project.name}</h4>
                            <p>${project.description}</p>
                            <div class="progress-summary">
                                <div class="progress-bar">
                                    <div class="progress-bar__fill" style="width: ${progress?.totalProgress || 0}%"></div>
                                </div>
                                <p class="progress-text">${progress?.totalProgress || 0}% complete • ${progress?.completedMilestones.length || 0} of ${project.milestones.length} milestones done</p>
                            </div>
                        </div>
                    </div>
                `;
            }

            // Update action buttons
            const startBtn = utils.getElementById('start-project-btn');
            const retakeBtn = utils.getElementById('retake-assessment');
            
            if (startBtn) {
                startBtn.innerHTML = '<span>Continue Project</span><span class="btn-arrow">→</span>';
            }
            
            if (retakeBtn) {
                retakeBtn.textContent = 'Start New Project';
                utils.addEventListener(retakeBtn, 'click', () => {
                    this.retakeAssessment();
                });
            }
        }
    }

    setupFormValidation() {
        // Real-time validation as user selects options
        const form = utils.getElementById('assessment-form');
        if (form) {
            utils.addEventListener(form, 'change', () => {
                this.hideValidationError();
            });
        }
    }

    updateFormProgress() {
        // Count answered questions
        let answeredCount = 0;
        ASSESSMENT_QUESTIONS.forEach((question) => {
            const selectedOption = document.querySelector(`input[name="question_${question.id}"]:checked`);
            if (selectedOption) {
                answeredCount++;
            }
        });

        // Update submit button state
        const submitBtn = utils.getElementById('submit-assessment');
        if (submitBtn) {
            const progress = (answeredCount / ASSESSMENT_QUESTIONS.length) * 100;
            if (progress === 100) {
                submitBtn.classList.add('btn--ready');
            } else {
                submitBtn.classList.remove('btn--ready');
            }
        }
    }

    setSubmitButtonLoading(loading) {
        const submitBtn = utils.getElementById('submit-assessment');
        const btnText = submitBtn?.querySelector('.btn-text');
        const btnLoading = submitBtn?.querySelector('.btn-loading');
        
        if (submitBtn && btnText && btnLoading) {
            if (loading) {
                submitBtn.disabled = true;
                btnText.style.display = 'none';
                btnLoading.style.display = 'flex';
            } else {
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            }
        }
    }

    showValidationError(message) {
        const validationDiv = utils.getElementById('form-validation');
        const messageElement = validationDiv?.querySelector('.validation-message');
        
        if (validationDiv && messageElement) {
            messageElement.textContent = message;
            validationDiv.style.display = 'block';
            
            // Scroll to error
            validationDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    hideValidationError() {
        const validationDiv = utils.getElementById('form-validation');
        if (validationDiv) {
            validationDiv.style.display = 'none';
        }
    }

    retakeAssessment() {
        // Clear existing data
        this.appState.clearAllData();
        
        // Reset UI to assessment state
        const assessmentSection = utils.getElementById('assessment-section');
        const resultsSection = utils.getElementById('results-section');
        
        if (assessmentSection && resultsSection) {
            resultsSection.classList.add('hidden');
            assessmentSection.classList.remove('hidden');
            assessmentSection.style.opacity = '1';
            assessmentSection.style.transform = 'translateY(0)';
        }
        
        // Reload assessment
        this.initializeAssessment();
    }

    loadProjectDashboard() {
        console.log('Loading project dashboard...');
        
        const userSession = this.appState.userSession;
        const projectProgress = this.appState.projectProgress;
        
        if (!userSession || !userSession.currentProject) {
            console.warn('No current project found');
            return;
        }

        const project = ProgressManager.getProjectById(userSession.currentProject);
        if (!project) {
            console.warn('Project template not found:', userSession.currentProject);
            return;
        }

        // Update project header
        const projectTitle = utils.getElementById('project-title');
        const projectDescription = utils.getElementById('project-description');
        
        if (projectTitle) {
            projectTitle.textContent = project.name;
        }
        
        if (projectDescription) {
            projectDescription.textContent = project.description;
        }

        // Load project milestones
        this.loadProjectMilestones(project, projectProgress);
        
        // Update progress indicator
        this.updateProgressIndicator(projectProgress);
        
        // Set up reset progress button
        this.setupResetProgressButton();
    }

    loadProjectMilestones(project, progress) {
        const milestonesContainer = utils.getElementById('milestones-list');
        if (!milestonesContainer) {
            console.warn('Milestones container not found');
            return;
        }

        // Clear existing milestones
        milestonesContainer.innerHTML = '';

        // Check if all milestones are completed
        const allCompleted = progress?.completedMilestones.length === project.milestones.length;
        
        // Show completion celebration if all done
        if (allCompleted) {
            this.showCompletionCelebration(milestonesContainer);
        }

        // Create milestone elements with enhanced UI
        project.milestones.forEach((milestone, index) => {
            const isCompleted = progress?.completedMilestones.includes(milestone.id) || false;
            const isCurrent = progress?.currentMilestone === milestone.id;

            const milestoneDiv = document.createElement('div');
            milestoneDiv.className = `milestone-card ${isCompleted ? 'milestone-card--completed' : ''} ${isCurrent ? 'milestone-card--current' : ''}`;
            
            milestoneDiv.innerHTML = `
                <div class="milestone-header">
                    <div class="milestone-checkbox-container">
                        <input type="checkbox" 
                               class="milestone-checkbox" 
                               id="milestone-${milestone.id}" 
                               ${isCompleted ? 'checked' : ''} 
                               data-milestone-id="${milestone.id}"
                               aria-label="Mark milestone as complete">
                    </div>
                    <div class="milestone-content">
                        <h3 class="milestone-title">${milestone.title}</h3>
                        <p class="milestone-description">${milestone.description}</p>
                    </div>
                </div>
                
                <div class="milestone-hint">
                    <span class="milestone-hint-label">💡 Hint</span>
                    <p class="milestone-hint-text">${milestone.hint}</p>
                </div>
                
                <div class="milestone-meta">
                    <div class="milestone-time">
                        <span>⏱️ ~${milestone.estimatedTime} hours</span>
                    </div>
                    <div class="milestone-help">
                        <a href="${milestone.helpResource.url}" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="help-link"
                           aria-label="Open help resource: ${milestone.helpResource.title}">
                            <span class="help-icon">📚</span>
                            <span>${milestone.helpResource.title}</span>
                        </a>
                    </div>
                </div>
            `;

            // Add event listener for checkbox with smooth animation
            const checkbox = milestoneDiv.querySelector('.milestone-checkbox');
            if (checkbox) {
                utils.addEventListener(checkbox, 'change', (e) => {
                    // Add loading state
                    milestoneDiv.classList.add('milestone-card--loading');
                    
                    // Simulate processing time for better UX
                    setTimeout(() => {
                        this.handleMilestoneToggle(milestone.id, e.target.checked);
                        milestoneDiv.classList.remove('milestone-card--loading');
                    }, 300);
                });
            }

            milestonesContainer.appendChild(milestoneDiv);
        });
    }

    showCompletionCelebration(container) {
        const celebrationDiv = document.createElement('div');
        celebrationDiv.className = 'completion-celebration';
        celebrationDiv.innerHTML = `
            <div class="celebration-icon">🎉</div>
            <h3 class="celebration-title">Congratulations!</h3>
            <p class="celebration-message">
                You've completed all milestones! You've successfully escaped tutorial hell and built something real. 
                Time to start your next project or add your own features to this one.
            </p>
            <div class="celebration-actions">
                <button class="btn btn--primary btn--large" onclick="window.tutorialEscapeApp.resetApp()">
                    <span>Start New Project</span>
                    <span class="btn-arrow">→</span>
                </button>
            </div>
        `;
        
        container.appendChild(celebrationDiv);
    }

    setupResetProgressButton() {
        const resetBtn = utils.getElementById('reset-progress-btn');
        if (resetBtn) {
            utils.addEventListener(resetBtn, 'click', () => {
                if (confirm('Are you sure you want to reset your progress? This action cannot be undone.')) {
                    this.resetProjectProgress();
                }
            });
        }
    }

    resetProjectProgress() {
        const userSession = this.appState.userSession;
        if (!userSession || !userSession.currentProject) return;

        // Create fresh progress
        const freshProgress = ProgressManager.createNewProgress(userSession.currentProject);
        this.appState.saveProjectProgress(freshProgress);

        // Reload the dashboard
        this.loadProjectDashboard();
        
        // Show confirmation
        this.showResetConfirmation();
    }

    showResetConfirmation() {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.className = 'reset-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">🔄</span>
                <span class="notification-text">Progress reset successfully!</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    handleMilestoneToggle(milestoneId, completed) {
        console.log(`Milestone ${milestoneId} ${completed ? 'completed' : 'uncompleted'}`);
        
        const currentProgress = this.appState.projectProgress;
        if (!currentProgress) return;

        const updatedProgress = ProgressManager.updateProgress(currentProgress, milestoneId, completed);
        this.appState.saveProjectProgress(updatedProgress);
        
        // Update progress indicator
        this.updateProgressIndicator(updatedProgress);
        
        // Reload milestones to update current milestone highlighting
        const userSession = this.appState.userSession;
        const project = ProgressManager.getProjectById(userSession.currentProject);
        if (project) {
            this.loadProjectMilestones(project, updatedProgress);
        }
    }

    updateProgressIndicator(progress) {
        const progressFill = utils.getElementById('progress-fill');
        const progressText = utils.getElementById('progress-text');
        const completedCount = utils.getElementById('completed-count');
        const totalCount = utils.getElementById('total-count');
        const encouragement = utils.getElementById('progress-encouragement');
        
        const completed = progress?.completedMilestones.length || 0;
        const total = progress ? ProgressManager.getProjectById(progress.projectId)?.milestones.length || 0 : 0;
        const percentage = progress?.totalProgress || 0;
        
        // Update progress bar with animation
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        
        // Update progress text
        if (progressText) {
            progressText.textContent = `${percentage}% Complete`;
        }
        
        // Update stats
        if (completedCount) {
            completedCount.textContent = completed;
        }
        
        if (totalCount) {
            totalCount.textContent = total;
        }
        
        // Update encouragement message based on progress
        if (encouragement) {
            const encouragementText = encouragement.querySelector('.encouragement-text');
            if (encouragementText) {
                let message = '';
                
                if (percentage === 0) {
                    message = "Ready to start building? Let's tackle your first milestone!";
                } else if (percentage < 25) {
                    message = "Great start! You're building momentum. Keep going!";
                } else if (percentage < 50) {
                    message = "You're making solid progress! The foundation is taking shape.";
                } else if (percentage < 75) {
                    message = "Excellent work! You're more than halfway there!";
                } else if (percentage < 100) {
                    message = "Almost there! You're so close to completing your project!";
                } else {
                    message = "🎉 Project complete! You've successfully escaped tutorial hell!";
                }
                
                encouragementText.textContent = message;
            }
        }
    }
}

// Application initialization
class TutorialEscapeApp {
    constructor() {
        this.appState = new AppState();
        this.pageManager = new PageManager(this.appState);
        
        // Global error handling
        window.addEventListener('error', (event) => {
            utils.handleError(event.error, 'Global error handler');
        });

        // Global unhandled promise rejection handling
        window.addEventListener('unhandledrejection', (event) => {
            utils.handleError(event.reason, 'Unhandled promise rejection');
        });
    }

    // Public API methods for future use
    getAppState() {
        return this.appState;
    }

    resetApp() {
        this.appState.clearAllData();
        window.location.href = 'index.html';
    }

    // Utility methods for debugging and testing
    getAssessmentQuestions() {
        return ASSESSMENT_QUESTIONS;
    }

    getProjectTemplates() {
        return PROJECT_TEMPLATES;
    }

    simulateAssessment(responses) {
        return AssessmentManager.processAssessmentResults(responses);
    }
}

// Initialize the application
const app = new TutorialEscapeApp();

// Export for potential module use or debugging
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TutorialEscapeApp, AppState, PageManager, utils };
}

// Make app available globally for debugging
window.tutorialEscapeApp = app;