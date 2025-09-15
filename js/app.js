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

// Enhanced Application state management with error handling
class AppState {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.userSession = this.loadUserSession();
        this.projectProgress = this.loadProjectProgress();
        this.isOnline = navigator.onLine;
        this.setupNetworkListeners();
    }

    getCurrentPage() {
        try {
            const path = window.location.pathname.toLowerCase();
            // Support pretty URLs (e.g., /project) and file URLs (project.html)
            if (path.includes('project')) return 'project';
            // Fallback: detect by DOM markers if script runs after DOM is ready
            if (typeof document !== 'undefined') {
                if (document.getElementById('milestones-list') || document.getElementById('project-title')) {
                    return 'project';
                }
            }
            return 'index';
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'getCurrentPage');
            return 'index';
        }
    }

    setupNetworkListeners() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            ErrorHandler.showSuccess('Connection restored');
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            ErrorHandler.showWarning('You are offline. Your progress will be saved locally.');
        });
    }

    loadUserSession() {
        const session = utils.getLocalStorage('tutorialEscape_userSession');
        if (session) {
            // Validate session data
            if (this.validateSessionData(session)) {
                return session;
            } else {
                ErrorHandler.showWarning('Session data was corrupted and has been reset.');
                this.clearUserSession();
            }
        }
        return null;
    }

    validateSessionData(session) {
        return session && 
               typeof session.skillLevel === 'string' &&
               typeof session.currentProject === 'string' &&
               typeof session.assessmentCompleted === 'boolean';
    }

    saveUserSession(sessionData) {
        if (!this.validateSessionData(sessionData)) {
            ErrorHandler.showError('Invalid session data. Please try again.');
            return false;
        }

        const success = utils.setLocalStorage('tutorialEscape_userSession', sessionData);
        if (success) {
            this.userSession = sessionData;
            return true;
        }
        return false;
    }

    loadProjectProgress() {
        const progress = utils.getLocalStorage('tutorialEscape_projectProgress');
        if (progress) {
            // Validate progress data
            if (this.validateProgressData(progress)) {
                return progress;
            } else {
                ErrorHandler.showWarning('Progress data was corrupted and has been reset.');
                this.clearProjectProgress();
            }
        }
        return null;
    }

    validateProgressData(progress) {
        return progress &&
               typeof progress.projectId === 'string' &&
               Array.isArray(progress.completedMilestones) &&
               typeof progress.totalProgress === 'number';
    }

    saveProjectProgress(progressData) {
        if (!this.validateProgressData(progressData)) {
            ErrorHandler.showError('Invalid progress data. Please try again.');
            return false;
        }

        const success = utils.setLocalStorage('tutorialEscape_projectProgress', progressData);
        if (success) {
            this.projectProgress = progressData;
            return true;
        }
        return false;
    }

    clearUserSession() {
        const success = utils.removeLocalStorage('tutorialEscape_userSession');
        if (success) {
            this.userSession = null;
        }
        return success;
    }

    clearProjectProgress() {
        const success = utils.removeLocalStorage('tutorialEscape_projectProgress');
        if (success) {
            this.projectProgress = null;
        }
        return success;
    }

    clearAllData() {
        const sessionCleared = this.clearUserSession();
        const progressCleared = this.clearProjectProgress();
        
        if (sessionCleared && progressCleared) {
            ErrorHandler.showSuccess('All data cleared successfully');
            return true;
        } else {
            ErrorHandler.showError('Failed to clear some data. Please try again.');
            return false;
        }
    }

    // Backup and restore functionality
    exportData() {
        try {
            const data = {
                userSession: this.userSession,
                projectProgress: this.projectProgress,
                exportDate: utils.getCurrentISODate(),
                version: '1.0'
            };
            return JSON.stringify(data, null, 2);
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'exportData');
            return null;
        }
    }

    importData(dataString) {
        try {
            const data = JSON.parse(dataString);
            
            if (data.version !== '1.0') {
                ErrorHandler.showError('Incompatible data version');
                return false;
            }

            if (data.userSession && this.validateSessionData(data.userSession)) {
                this.saveUserSession(data.userSession);
            }

            if (data.projectProgress && this.validateProgressData(data.projectProgress)) {
                this.saveProjectProgress(data.projectProgress);
            }

            ErrorHandler.showSuccess('Data imported successfully');
            return true;
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'importData');
            return false;
        }
    }
}

// Enhanced Error Handling and User Feedback System
class ErrorHandler {
    static showError(message, type = 'error', duration = 5000) {
        this.showNotification(message, type, duration);
    }

    static showSuccess(message, duration = 3000) {
        this.showNotification(message, 'success', duration);
    }

    static showWarning(message, duration = 4000) {
        this.showNotification(message, 'warning', duration);
    }

    static showNotification(message, type = 'info', duration = 3000) {
        // Remove existing notifications
        const existing = document.querySelectorAll('.notification');
        existing.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.getIcon(type)}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="Close notification">×</button>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Add event listeners
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => this.removeNotification(notification));

        // Auto-remove after duration
        setTimeout(() => this.removeNotification(notification), duration);

        // Animate in
        requestAnimationFrame(() => {
            notification.classList.add('notification--visible');
        });
    }

    static removeNotification(notification) {
        if (notification && notification.parentNode) {
            notification.classList.remove('notification--visible');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }

    static getIcon(type) {
        const icons = {
            success: '✓',
            error: '⚠',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    }

    static handleAsyncError(error, context = '') {
        console.error(`Async error in ${context}:`, error);
        
        let userMessage = 'Something went wrong. Please try again.';
        
        if (error.name === 'NetworkError' || error.message.includes('fetch')) {
            userMessage = 'Network error. Please check your connection and try again.';
        } else if (error.name === 'QuotaExceededError') {
            userMessage = 'Storage is full. Please clear some browser data and try again.';
        } else if (error.message.includes('localStorage')) {
            userMessage = 'Unable to save your progress. Please check your browser settings.';
        }
        
        this.showError(userMessage);
        return false;
    }
}

// Enhanced Utility functions with error handling
const utils = {
    // DOM helper functions with error handling
    getElementById(id) {
        try {
            const element = document.getElementById(id);
            if (!element) {
                console.warn(`Element with id '${id}' not found`);
            }
            return element;
        } catch (error) {
            ErrorHandler.handleAsyncError(error, `getElementById(${id})`);
            return null;
        }
    },

    querySelector(selector) {
        try {
            return document.querySelector(selector);
        } catch (error) {
            ErrorHandler.handleAsyncError(error, `querySelector(${selector})`);
            return null;
        }
    },

    querySelectorAll(selector) {
        try {
            return document.querySelectorAll(selector);
        } catch (error) {
            ErrorHandler.handleAsyncError(error, `querySelectorAll(${selector})`);
            return [];
        }
    },

    // Safe class manipulation helpers
    addClass(element, className) {
        try {
            if (element && element.classList) {
                element.classList.add(className);
                return true;
            }
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'addClass');
        }
        return false;
    },

    removeClass(element, className) {
        try {
            if (element && element.classList) {
                element.classList.remove(className);
                return true;
            }
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'removeClass');
        }
        return false;
    },

    toggleClass(element, className) {
        try {
            if (element && element.classList) {
                element.classList.toggle(className);
                return true;
            }
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'toggleClass');
        }
        return false;
    },

    // Safe event handling helpers
    addEventListener(element, event, handler) {
        try {
            if (element && typeof handler === 'function') {
                element.addEventListener(event, handler);
                return true;
            }
        } catch (error) {
            ErrorHandler.handleAsyncError(error, `addEventListener(${event})`);
        }
        return false;
    },

    // Enhanced form validation helpers
    validateRequired(value) {
        return value && typeof value === 'string' && value.trim().length > 0;
    },

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        return input.replace(/[<>\"']/g, '');
    },

    // Safe localStorage operations
    setLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            if (error.name === 'QuotaExceededError') {
                ErrorHandler.showError('Storage is full. Please clear some browser data.');
            } else {
                ErrorHandler.handleAsyncError(error, 'setLocalStorage');
            }
            return false;
        }
    },

    getLocalStorage(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'getLocalStorage');
            return null;
        }
    },

    removeLocalStorage(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'removeLocalStorage');
            return false;
        }
    },

    // Performance helpers
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Date helpers
    getCurrentISODate() {
        return new Date().toISOString();
    },

    formatDate(dateString) {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString();
        } catch (error) {
            return 'Invalid date';
        }
    },

    // Network helpers
    async fetchWithTimeout(url, options = {}, timeout = 10000) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        
        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            return response;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
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
            // Add smooth page transition
            this.addPageTransition();
            
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
            ErrorHandler.handleAsyncError(error, 'PageManager.initializePage');
        }
    }

    addPageTransition() {
        const container = document.querySelector('.page-transition');
        if (container) {
            // Add loading class initially
            container.classList.add('loaded');
            
            // Add smooth navigation for links
            this.setupSmoothNavigation();
        }
    }

    setupSmoothNavigation() {
        // Add smooth transitions for navigation links
        const navLinks = document.querySelectorAll('a[href$=".html"]');
        navLinks.forEach(link => {
            utils.addEventListener(link, 'click', (e) => {
                e.preventDefault();
                this.navigateWithTransition(link.href);
            });
        });
    }

    navigateWithTransition(url) {
        const container = document.querySelector('.page-transition');
        if (container) {
            // Show loading overlay
            this.showLoadingOverlay();
            
            // Fade out current page
            container.classList.remove('loaded');
            
            // Navigate after transition
            setTimeout(() => {
                window.location.href = url;
            }, 250);
        } else {
            // Fallback to immediate navigation
            window.location.href = url;
        }
    }

    showLoadingOverlay(message = 'Loading...') {
        const overlay = utils.getElementById('loading-overlay');
        const text = overlay?.querySelector('.loading-text');
        
        if (overlay) {
            if (text) text.textContent = message;
            overlay.classList.add('active');
        }
    }

    hideLoadingOverlay() {
        const overlay = utils.getElementById('loading-overlay');
        if (overlay) {
            overlay.classList.remove('active');
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
        
        // Show loading state
        this.showLoadingOverlay('Loading your project dashboard...');
        
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
        
        // Load milestone progress indicator
        this.loadMilestoneProgressIndicator(project, projectProgress);
        
        // Set up reset progress button
        this.setupResetProgressButton();
        
        // Set up help guide
        this.setupHelpGuide();
        
        // Hide loading overlay after everything is loaded
        setTimeout(() => {
            this.hideLoadingOverlay();
        }, 500);
    }

    setupHelpGuide() {
        const helpBtn = utils.getElementById('help-guide-btn');
        const helpModal = utils.getElementById('help-guide-modal');
        const closeBtn = utils.getElementById('help-guide-close');
        
        if (helpBtn && helpModal) {
            utils.addEventListener(helpBtn, 'click', () => {
                helpModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        }
        
        if (closeBtn && helpModal) {
            utils.addEventListener(closeBtn, 'click', () => {
                helpModal.classList.add('hidden');
                document.body.style.overflow = '';
            });
        }
        
        // Close on backdrop click
        if (helpModal) {
            utils.addEventListener(helpModal, 'click', (e) => {
                if (e.target === helpModal) {
                    helpModal.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            });
        }
        
        // Close on Escape key
        utils.addEventListener(document, 'keydown', (e) => {
            if (e.key === 'Escape' && helpModal && !helpModal.classList.contains('hidden')) {
                helpModal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }

    loadMilestoneProgressIndicator(project, progress) {
        const indicatorContainer = utils.getElementById('milestone-progress-indicator');
        if (!indicatorContainer) return;

        indicatorContainer.innerHTML = '';

        project.milestones.forEach((milestone, index) => {
            const isCompleted = progress?.completedMilestones.includes(milestone.id) || false;
            const isCurrent = progress?.currentMilestone === milestone.id;
            
            // Create step element
            const stepDiv = document.createElement('div');
            stepDiv.className = `progress-step ${
                isCompleted ? 'progress-step--completed' : 
                isCurrent ? 'progress-step--current' : 
                'progress-step--pending'
            }`;
            stepDiv.textContent = isCompleted ? '✓' : (index + 1);
            stepDiv.title = milestone.title;
            
            indicatorContainer.appendChild(stepDiv);
            
            // Add connector (except for last item)
            if (index < project.milestones.length - 1) {
                const connectorDiv = document.createElement('div');
                connectorDiv.className = `progress-connector ${
                    isCompleted ? 'progress-connector--completed' : ''
                }`;
                indicatorContainer.appendChild(connectorDiv);
            }
        });
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
                        <div class="help-tooltip">
                            <a href="${milestone.helpResource.url}" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="help-link"
                               aria-label="Open help resource: ${milestone.helpResource.title}">
                                <span class="help-icon">📚</span>
                                <span>${milestone.helpResource.title}</span>
                            </a>
                            <div class="help-tooltip-content">
                                ${milestone.helpResource.description}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="help-expandable" data-milestone-id="${milestone.id}">
                    <div class="help-expandable-header">
                        <h4 class="help-expandable-title">Need more help with this milestone?</h4>
                        <span class="help-expandable-icon">▼</span>
                    </div>
                    <div class="help-expandable-content">
                        <div class="help-expandable-body">
                            <p class="help-expandable-description">
                                ${milestone.helpResource.description}
                            </p>
                            <div class="help-expandable-links">
                                <a href="${milestone.helpResource.url}" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="help-expandable-link">
                                    <span>📖</span>
                                    <span>Read Documentation</span>
                                </a>
                                ${this.getAdditionalHelpLinks(milestone)}
                            </div>
                        </div>
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

            // Set up expandable help section
            this.setupExpandableHelp(milestoneDiv, milestone);
            
            // Add keyboard navigation
            this.setupKeyboardNavigation(milestoneDiv, milestone);

            milestonesContainer.appendChild(milestoneDiv);
        });
    }

    getAdditionalHelpLinks(milestone) {
        // Generate additional contextual help links based on milestone content
        const additionalLinks = [];
        
        // Add specific help links based on milestone keywords
        if (milestone.title.toLowerCase().includes('html') || milestone.description.toLowerCase().includes('html')) {
            additionalLinks.push(`
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="help-expandable-link">
                    <span>🌐</span>
                    <span>HTML Basics</span>
                </a>
            `);
        }
        
        if (milestone.title.toLowerCase().includes('css') || milestone.description.toLowerCase().includes('styling')) {
            additionalLinks.push(`
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="help-expandable-link">
                    <span>🎨</span>
                    <span>CSS Guide</span>
                </a>
            `);
        }
        
        if (milestone.title.toLowerCase().includes('javascript') || milestone.description.toLowerCase().includes('function')) {
            additionalLinks.push(`
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="help-expandable-link">
                    <span>⚡</span>
                    <span>JavaScript Guide</span>
                </a>
            `);
        }
        
        if (milestone.title.toLowerCase().includes('api') || milestone.description.toLowerCase().includes('fetch')) {
            additionalLinks.push(`
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="help-expandable-link">
                    <span>🔗</span>
                    <span>API Tutorial</span>
                </a>
            `);
        }
        
        return additionalLinks.join('');
    }

    setupExpandableHelp(milestoneDiv, milestone) {
        const expandableHelp = milestoneDiv.querySelector('.help-expandable');
        const header = expandableHelp?.querySelector('.help-expandable-header');
        
        if (header && expandableHelp) {
            utils.addEventListener(header, 'click', () => {
                const isExpanded = expandableHelp.classList.contains('expanded');
                expandableHelp.classList.toggle('expanded');
                
                // Update aria attributes
                header.setAttribute('aria-expanded', !isExpanded);
                
                // Add visual cue when expanded
                if (!isExpanded) {
                    milestoneDiv.classList.add('visual-cue', 'active');
                    setTimeout(() => {
                        milestoneDiv.classList.remove('active');
                    }, 2000);
                } else {
                    milestoneDiv.classList.remove('visual-cue');
                }
            });
        }
    }

    setupKeyboardNavigation(milestoneDiv, milestone) {
        const checkbox = milestoneDiv.querySelector('.milestone-checkbox');
        const helpLink = milestoneDiv.querySelector('.help-link');
        const expandableHeader = milestoneDiv.querySelector('.help-expandable-header');
        
        // Add keyboard support for milestone card
        milestoneDiv.setAttribute('tabindex', '0');
        milestoneDiv.setAttribute('role', 'article');
        milestoneDiv.setAttribute('aria-label', `Milestone: ${milestone.title}`);
        
        // Keyboard navigation for milestone card
        utils.addEventListener(milestoneDiv, 'keydown', (e) => {
            switch (e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    if (checkbox) checkbox.click();
                    break;
                case 'h':
                case 'H':
                    e.preventDefault();
                    if (helpLink) helpLink.click();
                    break;
                case '?':
                    e.preventDefault();
                    if (expandableHeader) expandableHeader.click();
                    break;
            }
        });
        
        // Add keyboard support for expandable help
        if (expandableHeader) {
            expandableHeader.setAttribute('tabindex', '0');
            expandableHeader.setAttribute('role', 'button');
            expandableHeader.setAttribute('aria-expanded', 'false');
            
            utils.addEventListener(expandableHeader, 'keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    expandableHeader.click();
                }
            });
        }
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
            this.loadMilestoneProgressIndicator(project, updatedProgress);
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
            ErrorHandler.handleAsyncError(event.error, 'Global error handler');
        });

        // Global unhandled promise rejection handling
        window.addEventListener('unhandledrejection', (event) => {
            ErrorHandler.handleAsyncError(event.reason, 'Unhandled promise rejection');
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
// Performance Optimization Manager
class PerformanceManager {
    constructor() {
        this.observers = new Map();
        this.setupIntersectionObserver();
        this.setupPerformanceMonitoring();
    }

    setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.intersectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });
        }
    }

    observeElement(element) {
        if (this.intersectionObserver && element) {
            this.intersectionObserver.observe(element);
        }
    }

    setupPerformanceMonitoring() {
        // Monitor page load performance
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log('Page Load Performance:', {
                            loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                            totalTime: perfData.loadEventEnd - perfData.fetchStart
                        });
                    }
                }, 0);
            });
        }
    }

    // Lazy load images
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    // Preload critical resources
    preloadResources() {
        const criticalResources = [
            { href: 'styles/main.css', as: 'style' },
            { href: 'js/app.js', as: 'script' }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            document.head.appendChild(link);
        });
    }

    // Optimize animations for better performance
    optimizeAnimations() {
        // Reduce animations on low-end devices
        if ('deviceMemory' in navigator && navigator.deviceMemory < 4) {
            document.documentElement.classList.add('reduce-animations');
        }

        // Pause animations when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.documentElement.classList.add('paused-animations');
            } else {
                document.documentElement.classList.remove('paused-animations');
            }
        });
    }
}

// Enhanced Page Manager with performance optimizations
class EnhancedPageManager extends PageManager {
    constructor(appState) {
        super(appState);
        this.performanceManager = new PerformanceManager();
        this.setupServiceWorker();
    }

    initializePage() {
        try {
            // Show loading overlay immediately
            this.showLoadingOverlay('Loading...');
            
            // Add smooth page transition
            this.addPageTransition();
            
            // Initialize performance optimizations
            this.performanceManager.optimizeAnimations();
            this.performanceManager.lazyLoadImages();
            
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
            
            // Hide loading overlay after initialization
            setTimeout(() => this.hideLoadingOverlay(), 500);
            
        } catch (error) {
            ErrorHandler.handleAsyncError(error, 'EnhancedPageManager.initializePage');
            this.hideLoadingOverlay();
        }
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Enhanced form validation with debouncing
    setupFormValidation() {
        const form = utils.getElementById('assessment-form');
        if (!form) return;

        const debouncedValidation = utils.debounce(() => {
            this.validateForm();
        }, 300);

        // Add real-time validation with debouncing
        form.addEventListener('input', debouncedValidation);
        form.addEventListener('change', debouncedValidation);
    }

    validateForm() {
        const form = utils.getElementById('assessment-form');
        if (!form) return false;

        let isValid = true;
        const questions = form.querySelectorAll('.question-group');
        
        questions.forEach((questionGroup, index) => {
            const radios = questionGroup.querySelectorAll('input[type="radio"]');
            const hasSelection = Array.from(radios).some(radio => radio.checked);
            
            if (!hasSelection) {
                isValid = false;
                questionGroup.classList.add('question-error');
            } else {
                questionGroup.classList.remove('question-error');
            }
        });

        // Update submit button state
        const submitBtn = utils.getElementById('submit-assessment');
        if (submitBtn) {
            submitBtn.disabled = !isValid;
            if (isValid) {
                submitBtn.classList.add('btn--ready');
            } else {
                submitBtn.classList.remove('btn--ready');
            }
        }

        return isValid;
    }

    // Enhanced progress tracking with animations
    updateFormProgress() {
        const form = utils.getElementById('assessment-form');
        if (!form) return;

        const totalQuestions = ASSESSMENT_QUESTIONS.length;
        const answeredQuestions = form.querySelectorAll('input[type="radio"]:checked').length;
        const progress = (answeredQuestions / totalQuestions) * 100;

        // Update progress indicator if it exists
        const progressIndicator = document.querySelector('.form-progress');
        if (progressIndicator) {
            const progressBar = progressIndicator.querySelector('.progress-bar__fill');
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
        }

        // Validate form
        this.validateForm();
    }
}

// Initialize the enhanced application
document.addEventListener('DOMContentLoaded', () => {
    try {
        const appState = new AppState();
        const pageManager = new EnhancedPageManager(appState);
        
        // Make appState globally available for debugging
        window.tutorialEscapeApp = {
            appState,
            pageManager,
            ErrorHandler,
            utils
        };
        
    } catch (error) {
        ErrorHandler.handleAsyncError(error, 'Application initialization');
    }
});

// Global error handler
window.addEventListener('error', (event) => {
    ErrorHandler.handleAsyncError(event.error, 'Global error handler');
});

window.addEventListener('unhandledrejection', (event) => {
    ErrorHandler.handleAsyncError(event.reason, 'Unhandled promise rejection');
});