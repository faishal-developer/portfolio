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

  test('renders direct link to Case Studies page from projects section', () => {
    render(<App />);
    const caseStudyLinks = screen.getAllByRole('link', { name: /View Case Studies/i });
    expect(caseStudyLinks.length).toBeGreaterThan(0);
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

  test('renders polished footer with navigation, status badge, and back-to-top interaction', () => {
    window.scrollTo = jest.fn();
    render(<App />);
    
    // Status badge & branding
    expect(screen.getByText(/Open to opportunities/i)).toBeInTheDocument();
    expect(screen.getByText(/Quick Navigation/i)).toBeInTheDocument();
    expect(screen.getByText(/Connect & Reach Out/i)).toBeInTheDocument();
    
    // Back to top button interaction
    const backToTopBtn = screen.getByRole('button', { name: /Scroll back to top/i });
    expect(backToTopBtn).toBeInTheDocument();
    fireEvent.click(backToTopBtn);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  test('renders Case Studies listing page when navigating to /case-studies', () => {
    window.history.pushState({}, 'Case Studies', '/case-studies');
    render(<App />);

    expect(screen.getByText(/Production technical case studies documenting database architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/My Playlist & Folder Management/i)).toBeInTheDocument();
    expect(screen.getByText(/OTP API Abuse Prevention/i)).toBeInTheDocument();

    // Verify Back to Portfolio button is present
    const backBtn = screen.getByText(/Back to Portfolio/i);
    expect(backBtn).toBeInTheDocument();
  });

  test('renders Case Study detail page with all technical sections when navigating to /case-studies/otp-api-abuse-prevention', () => {
    window.history.pushState({}, 'Case Study Detail', '/case-studies/otp-api-abuse-prevention');
    render(<App />);

    expect(screen.getByRole('heading', { name: /OTP API Abuse Prevention/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Overview$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^The Attack$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Why Phone-Based Limits Were Insufficient$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Why IP Blocking Was Not Enough$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^PassKey System Architecture$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Additional CAPTCHA Layer$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Security Considerations$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Challenges & Trade-offs$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Results \/ Current Status$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Engineering Takeaway$/i })).toBeInTheDocument();

    // Verify Back to Case Studies button
    const backButtons = screen.getAllByText(/Back to Case Studies/i);
    expect(backButtons.length).toBeGreaterThan(0);
  });

  test('renders Case Study detail page for My Playlist when navigating to /case-studies/my-playlist-folder-management', () => {
    window.history.pushState({}, 'Case Study Detail', '/case-studies/my-playlist-folder-management');
    render(<App />);

    expect(screen.getByRole('heading', { name: /My Playlist & Folder Management/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Overview$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^The Initial Assumption$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Database Design$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Data Integrity & Business Rules$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Authentication & Authorization$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Rate Limiting$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Origin Restrictions$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Testing & Deployment$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Challenges & Trade-offs$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Engineering Takeaway$/i })).toBeInTheDocument();
  });
});
