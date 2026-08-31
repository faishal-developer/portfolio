import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Portfolio Component & Responsiveness Tests', () => {
  test('renders header and all core portfolio sections', () => {
    render(<App />);
    
    // Header
    expect(screen.getByText(/Md\. Faishal/i)).toBeInTheDocument();
    expect(screen.getByText(/WELCOME TO MY WORLD/i)).toBeInTheDocument();
    expect(screen.getByText(/Download Resume/i)).toBeInTheDocument();

    // Experience
    expect(screen.getByText(/Professional Experience/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Divergent Technologies Limited/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Doodle Incorporation/i).length).toBeGreaterThan(0);


    // Services
    expect(screen.getAllByText(/WHAT I DO/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Full Stack Web Development/i)).toBeInTheDocument();

    // Projects
    expect(screen.getAllByText(/Engineering Projects/i).length).toBeGreaterThan(0);

    // Skills
    expect(screen.getAllByText(/Skills & Capabilities/i).length).toBeGreaterThan(0);


    // Education
    expect(screen.getByText(/Academic Background/i)).toBeInTheDocument();
    expect(screen.getByText(/Comilla University/i)).toBeInTheDocument();

    // Contact
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
    expect(screen.getByText(/md\.faishal\.dev@gmail\.com/i)).toBeInTheDocument();

    // Footer
    expect(screen.getByText(/All rights reserved by Md Faishal/i)).toBeInTheDocument();
  });

  test('switches skill tabs correctly', () => {
    render(<App />);
    const cloudTab = screen.getByRole('button', { name: /Cloud & Infrastructure/i });
    fireEvent.click(cloudTab);
    expect(screen.getByText(/AWS Cloud Services/i)).toBeInTheDocument();
  });

  test('opens and closes project case study modal', () => {
    render(<App />);
    const caseStudyBtns = screen.getAllByRole('button', { name: /Case Study & Architecture/i });
    expect(caseStudyBtns.length).toBeGreaterThan(0);
    
    fireEvent.click(caseStudyBtns[0]);
    expect(screen.getByText(/Measurable Production Outcomes/i)).toBeInTheDocument();
    expect(screen.getByText(/Architecture & Engineering Scope/i)).toBeInTheDocument();

    const closeBtn = screen.getByText(/^Close$/i);
    fireEvent.click(closeBtn);
    expect(screen.queryByText(/Measurable Production Outcomes/i)).not.toBeInTheDocument();
  });

  test('mobile navigation toggle works correctly', () => {
    render(<App />);
    const mobileToggle = screen.getByLabelText(/Toggle navigation menu/i);
    expect(mobileToggle).toBeInTheDocument();

    // Open mobile menu
    fireEvent.click(mobileToggle);
    const mobileNavLinks = screen.getAllByRole('link', { name: /Experience/i });
    expect(mobileNavLinks.length).toBeGreaterThan(0);
  });
});


