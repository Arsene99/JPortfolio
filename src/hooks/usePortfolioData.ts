import { useState, useEffect } from 'react';
import { 
  Project, Skill, Experience, Analysis, Profile, Contact,
  INITIAL_PROJECTS, INITIAL_SKILLS, INITIAL_EXPERIENCE, INITIAL_ANALYSES, INITIAL_PROFILE, INITIAL_CONTACT 
} from '../lib/data';

export function usePortfolioData() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [profile, setProfile] = useState<Profile>(INITIAL_PROFILE);
  const [contact, setContact] = useState<Contact>(INITIAL_CONTACT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio_projects');
    const savedSkills = localStorage.getItem('portfolio_skills');
    const savedExperiences = localStorage.getItem('portfolio_experiences');
    const savedAnalyses = localStorage.getItem('portfolio_analyses');
    const savedProfile = localStorage.getItem('portfolio_profile');
    const savedContact = localStorage.getItem('portfolio_contact');

    if (savedProjects) setProjects(JSON.parse(savedProjects));
    else {
      setProjects(INITIAL_PROJECTS);
      localStorage.setItem('portfolio_projects', JSON.stringify(INITIAL_PROJECTS));
    }

    if (savedSkills) setSkills(JSON.parse(savedSkills));
    else {
      setSkills(INITIAL_SKILLS);
      localStorage.setItem('portfolio_skills', JSON.stringify(INITIAL_SKILLS));
    }

    if (savedExperiences) setExperiences(JSON.parse(savedExperiences));
    else {
      setExperiences(INITIAL_EXPERIENCE);
      localStorage.setItem('portfolio_experiences', JSON.stringify(INITIAL_EXPERIENCE));
    }

    if (savedAnalyses) setAnalyses(JSON.parse(savedAnalyses));
    else {
      setAnalyses(INITIAL_ANALYSES);
      localStorage.setItem('portfolio_analyses', JSON.stringify(INITIAL_ANALYSES));
    }

    if (savedProfile) setProfile(JSON.parse(savedProfile));
    else {
      setProfile(INITIAL_PROFILE);
      localStorage.setItem('portfolio_profile', JSON.stringify(INITIAL_PROFILE));
    }

    if (savedContact) setContact(JSON.parse(savedContact));
    else {
      setContact(INITIAL_CONTACT);
      localStorage.setItem('portfolio_contact', JSON.stringify(INITIAL_CONTACT));
    }

    setLoading(false);
  }, []);

  const updateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('portfolio_projects', JSON.stringify(newProjects));
  };

  const updateSkills = (newSkills: Skill[]) => {
    setSkills(newSkills);
    localStorage.setItem('portfolio_skills', JSON.stringify(newSkills));
  };

  const updateExperiences = (newExperiences: Experience[]) => {
    setExperiences(newExperiences);
    localStorage.setItem('portfolio_experiences', JSON.stringify(newExperiences));
  };

  const updateAnalyses = (newAnalyses: Analysis[]) => {
    setAnalyses(newAnalyses);
    localStorage.setItem('portfolio_analyses', JSON.stringify(newAnalyses));
  };

  const updateProfile = (newProfile: Profile) => {
    setProfile(newProfile);
    localStorage.setItem('portfolio_profile', JSON.stringify(newProfile));
  };

  const updateContact = (newContact: Contact) => {
    setContact(newContact);
    localStorage.setItem('portfolio_contact', JSON.stringify(newContact));
  };

  return { 
    projects, skills, experiences, analyses, profile, contact, loading, 
    updateProjects, updateSkills, updateExperiences, updateAnalyses, updateProfile, updateContact 
  };
}
