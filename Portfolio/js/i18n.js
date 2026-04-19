/*
 * Language Switcher - i18n
 * Supports: en-US (English), zh-CN (Chinese)
 */

var i18n = (function () {
    'use strict';

    var translations = {
        'en-US': {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skill': 'Skill',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Contact',

            // Hero
            'hero.name.first': 'ZHAO',
            'hero.name.last': 'Shanhe (Edward)',
            'hero.prefix': "I'm",

            // About
            'about.subtitle': 'Biography',
            'about.title': 'About Me',
            'about.desc': 'Hi! I\'m <span>ZHAO Shanhe </span>, a Full Stack Engineer with 2 years of experience, whose English name is Edward, also skilled in data analysis and AI. I hold a Honours Bachelor of Science in Internet and Multimedia Technology from Hong Kong Polytechnic University.',
            'about.intro': "I'm ZHAO Shanhe and",
            'about.birthday': 'Birthday:',
            'about.age': 'Age:',
            'about.location': 'Location:',
            'about.location-desc': ' Hami, Xinjiang, China ',
            'about.interests': 'Interests:',
            'about.interests-desc': 'Computer, Reading',
            'about.study': 'Study:',
            'about.study1-desc': ' Hong Kong Polytechnic University ',
            'about.study2-desc': ' Hong Kong Polytechnic University ',
            'about.degree': 'Degree:',
            'about.degree1-desc': ' Bachelor of Science (Honours) ',
            'about.degree2-desc': ' Master of Science ',
            'about.degree1-specialization': 'Internet and Multimedia Technology',
            'about.degree2-specialization': 'Business Analytics',
            'about.cv': 'Download CV',

            // Skills
            'skill.subtitle': 'Skill',
            'skill.title': 'Quality Skill',
            'skill.creativity.title': 'Creativity',
            'skill.creativity.desc': 'I thrive at the intersection of technology and art, bridging technical challenges with imaginative problem-solving.',
            'skill.dev.title': 'Development',
            'skill.dev.desc': 'I am proficient in multiple development languages such as Python, Swift, Java, HTML, CSS, JavaScript, PHP, C#, etc.',
            'skill.organizer.title': 'Methodical Organizer',
            'skill.organizer.desc': 'Methodical organizer committed to structured workflows ensuring timely outcomes.',
            'skill.allrounder.title': 'All-Rounder',
            'skill.allrounder.desc': 'Proficient in cross-disciplinary tools like Tableau, Photoshop, and Blender to streamline data visualization, digital design, and 3D modeling workflows.',
            'skill.learner.title': 'Learner',
            'skill.learner.desc': 'Lifelong learner committed to upskilling through courses, projects, and tech trends to innovate in fast-evolving fields.',
            'skill.social.title': 'Social skills',
            'skill.social.desc': 'I foster inclusive collaboration by bridging perspectives across backgrounds to drive shared goals.\u200B\u200B',
            'skill.letswork': 'Are you interested in me? ',
            'skill.contactlink': ' Please contact with me',

            // Portfolio
            'portfolio.subtitle': 'Portfolio',
            'portfolio.title': 'Featured Works',
            'portfolio.all': 'All',
            'portfolio.game': 'Game',
            'portfolio.ml': 'ML',
            'portfolio.iot': 'IoT',
            'portfolio.aiagent': 'AI Agent',

            // Portfolio items
            'portfolio.item1.title': 'Darabun (Unity 2D Game, Team 6 with Peter PAN)',
            'portfolio.item1.category': 'Game',
            'portfolio.item2.title': 'Climax Soldier (Unity 3D Game, Team 6 with Peter PAN)',
            'portfolio.item2.category': 'Game',
            'portfolio.item3.title': 'An AIoT Parking System',
            'portfolio.item3.category': 'ML & IoT',
            'portfolio.item4.title': 'A Little Game (H5 Game)',
            'portfolio.item4.category': 'Game',
            'portfolio.item5.title': 'DDoS Attack Detection',
            'portfolio.item5.category': 'ML',
            'portfolio.item6.title': 'LLM Big Data Text Sentiment Analysis',
            'portfolio.item6.category': 'ML',
            'portfolio.item7.title': 'Cutepetit (Desktop Pet)',
            'portfolio.item7.category': 'AI Agent',

            // Contact
            'contact.subtitle': 'Contact',
            'contact.title': 'Get in Touch',
            'contact.desc': 'Please contact me through the following contact information:',
            'contact.mail': 'Mail:',
            'contact.phone': 'Phone:',

            // Copyright
            'copyright': '\u00A9Copyright 2026. All rights are By',

            // Language switcher
            'lang.label': 'EN'
        },

        'zh-CN': {
            // Navigation
            'nav.home': '首页',
            'nav.about': '关于',
            'nav.skill': '技能',
            'nav.portfolio': '作品集',
            'nav.contact': '联系',

            // Hero
            'hero.name.first': '赵',
            'hero.name.last': '珊禾 (Edward)',
            'hero.prefix': '一名',

            // About
            'about.subtitle': '个人简介',
            'about.title': '关于我',
            'about.desc': '你好！我是<span>赵珊禾</span>，一名拥有2年经验的全栈工程师，英文名Edward，同时也擅长数据分析和AI。我毕业于香港理工大学，获得互联网与多媒体技术荣誉理学士学位。',
            'about.intro': '我是赵珊禾，一名',
            'about.birthday': '生日：',
            'about.age': '年龄：',
            'about.location': '所在地：',
            'about.location-desc': '哈密，新疆，中国',
            'about.interests': '兴趣：',
            'about.interests-desc': '计算机，阅读',
            'about.study': '就读院校：',
            'about.study1-desc': '香港理工大学',
            'about.study2-desc': '香港理工大学',
            'about.degree': '学位：',
            'about.degree1-desc': '荣誉理学士',
            'about.degree2-desc': '理学硕士',
            'about.degree1-specialization': '互联网与多媒体技术',
            'about.degree2-specialization': '商业分析',
            'about.cv': '下载简历',

            // Skills
            'skill.subtitle': '技能',
            'skill.title': '核心技能',
            'skill.creativity.title': '创新创造',
            'skill.creativity.desc': '我活跃于技术与艺术的交汇点，以富有想象力的方式解决技术难题。',
            'skill.dev.title': '开发能力',
            'skill.dev.desc': '精通多种开发语言，包括 Python、Swift、Java、HTML、CSS、JavaScript、PHP、C# 等。',
            'skill.organizer.title': '规划未来',
            'skill.organizer.desc': '注重结构化工作流程，确保任务按时高效完成。',
            'skill.allrounder.title': '诸武精通',
            'skill.allrounder.desc': '熟练使用 Tableau、Photoshop、Blender 等跨学科工具，优化数据可视化、数字设计和3D建模工作流。',
            'skill.learner.title': '终生学习',
            'skill.learner.desc': '通过课程、项目和技术趋势不断提升自我，在快速发展的领域中保持创新。',
            'skill.social.title': '社交能力',
            'skill.social.desc': '善于搭建跨背景的沟通桥梁，推动团队协作以实现共同目标。\u200B\u200B',
            'skill.letswork': '对我感兴趣？',
            'skill.contactlink': '请联系我',

            // Portfolio
            'portfolio.subtitle': '作品集',
            'portfolio.title': '精选作品',
            'portfolio.all': '全部',
            'portfolio.game': '游戏',
            'portfolio.ml': '机器学习',
            'portfolio.iot': '物联网',
            'portfolio.aiagent': '人工智能代理',

            // Portfolio items
            'portfolio.item1.title': 'Darabun（Unity 2D 游戏，与 Peter PAN 一起组建 Team 6 ）',
            'portfolio.item1.category': '游戏',
            'portfolio.item2.title': 'Climax Soldier（Unity 3D 游戏，与 Peter PAN 一起组建 Team 6 ）',
            'portfolio.item2.category': '游戏',
            'portfolio.item3.title': 'AIoT 智能停车系统',
            'portfolio.item3.category': '机器学习 & 物联网',
            'portfolio.item4.title': '小游戏（H5 小游戏）',
            'portfolio.item4.category': '游戏',
            'portfolio.item5.title': 'DDoS 攻击检测',
            'portfolio.item5.category': '机器学习',
            'portfolio.item6.title': 'LLM 大数据文本情感分析',
            'portfolio.item6.category': '机器学习',
            'portfolio.item7.title': 'Cutepetit（桌宠）',
            'portfolio.item7.category': '人工智能代理',

            // Contact
            'contact.subtitle': '与我联系',
            'contact.title': '联系方式',
            'contact.desc': '请通过以下联系方式与我取得联系：',
            'contact.mail': '邮箱：',
            'contact.phone': '电话：',

            // Copyright
            'copyright': '\u00A9Copyright 2026. 版权所有 By',

            // Language switcher
            'lang.label': '中'
        }
    };

    var currentLang = localStorage.getItem('lang') || 'en-US';

    // Typed.js strings per language
    var typedStrings = {
        'en-US': ['a Tech Enthusiast', 'a Developer', 'an AI Learner'],
        'zh-CN': ['科技爱好者', '开发者', 'AI学习者']
    };

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang === 'zh-CN' ? 'zh-CN' : 'en-US';

        // Update all data-i18n elements
        var elements = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < elements.length; i++) {
            var key = elements[i].getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                elements[i].innerHTML = translations[lang][key];
            }
        }

        // Update placeholder elements
        var placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        for (var j = 0; j < placeholderElements.length; j++) {
            var pKey = placeholderElements[j].getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][pKey]) {
                placeholderElements[j].placeholder = translations[lang][pKey];
            }
        }

        // Update data-title attributes (portfolio items)
        // Use jQuery .data() to update cache — jQuery caches data-* values on first read,
        // so setAttribute alone won't affect subsequent jQuery(this).data('title') calls.
        var titleElements = document.querySelectorAll('[data-i18n-title]');
        for (var t = 0; t < titleElements.length; t++) {
            var tKey = titleElements[t].getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][tKey]) {
                titleElements[t].setAttribute('data-title', translations[lang][tKey]);
                jQuery(titleElements[t]).data('title', translations[lang][tKey]);
            }
        }

        // Update data-category attributes (portfolio items)
        var catElements = document.querySelectorAll('[data-i18n-category]');
        for (var c = 0; c < catElements.length; c++) {
            var cKey = catElements[c].getAttribute('data-i18n-category');
            if (translations[lang] && translations[lang][cKey]) {
                catElements[c].setAttribute('data-category', translations[lang][cKey]);
                jQuery(catElements[c]).data('category', translations[lang][cKey]);
            }
        }

        // Update toggle button label
        var label = document.querySelector('.arlo_tm_lang_switch .lang-label');
        if (label) {
            label.textContent = translations[lang]['lang.label'];
        }

        // Update active state on toggle buttons
        var btns = document.querySelectorAll('.arlo_tm_lang_switch .lang-btn');
        for (var k = 0; k < btns.length; k++) {
            btns[k].classList.toggle('active', btns[k].getAttribute('data-lang') === lang);
        }

        // Reinitialize typed animation with new strings
        reinitTyped(lang);

        // Dispatch custom event for other scripts
        var event = new CustomEvent('languageChanged', { detail: { lang: lang } });
        document.dispatchEvent(event);
    }

    function reinitTyped(lang) {
        var typedEl = jQuery('.arlo_tm_animation_text_word');
        if (typedEl.length) {
            try {
                // Destroy existing typed instance
                if (typedEl[0]._typed) {
                    typedEl[0]._typed.destroy();
                    typedEl[0]._typed = null;
                }
                // Clear current text
                typedEl.text('');
                // Reinitialize
                typedEl.typed({
                    strings: typedStrings[lang] || typedStrings.en,
                    loop: true,
                    startDelay: 500,
                    backDelay: 2000
                });
            } catch (e) {
                // Typed.js not available, just set text
                typedEl.text(typedStrings[lang][0]);
            }
        }
    }

    function toggleLanguage() {
        var newLang = currentLang === 'en-US' ? 'zh-CN' : 'en-US';
        setLanguage(newLang);
    }

    function getCurrentLang() {
        return currentLang;
    }

    // Public API
    return {
        setLanguage: setLanguage,
        toggleLanguage: toggleLanguage,
        getCurrentLang: getCurrentLang
    };
})();

// Auto-apply language on DOM ready
jQuery(document).ready(function () {
    i18n.setLanguage(i18n.getCurrentLang());
});
