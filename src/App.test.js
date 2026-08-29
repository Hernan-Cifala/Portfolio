import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

describe('App shell', () => {
  test('renders the site heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Hernán Cifalá \| Developer/i })
    ).toBeInTheDocument();
  });

  test('renders the sections the navigation anchors point to', () => {
    const { container } = render(<App />);
    // The site has no router: navigation is anchors, so these ids are the contract.
    ['about', 'growth', 'contact', 'projects'].forEach((id) => {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    });
  });

  test('exposes a single main landmark', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

describe('Projects modal', () => {
  const openFirstModal = () => {
    render(<App />);
    fireEvent.click(
      screen.getByRole('button', { name: /Read more about Portfolio/i })
    );
    return screen.getByRole('dialog');
  };

  test('is not rendered until a project is opened', () => {
    render(<App />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('opens as a labelled modal dialog', () => {
    const dialog = openFirstModal();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    // The accessible name comes from the title, not from a hardcoded string.
    expect(within(dialog).getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument();
  });

  test('closes on Escape', () => {
    openFirstModal();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('closes with the Close button', () => {
    const dialog = openFirstModal();
    fireEvent.click(within(dialog).getByRole('button', { name: /close/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('locks background scrolling while open and restores it on close', () => {
    openFirstModal();
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  test('returns focus to the button that opened it', () => {
    render(<App />);
    const trigger = screen.getByRole('button', { name: /Read more about Portfolio/i });
    fireEvent.click(trigger);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(trigger).toHaveFocus();
  });

  test('each project card has a distinguishable trigger', () => {
    render(<App />);
    ['Portfolio', 'Legacy Portfolio', 'Sales Conversion Optimization'].forEach((title) => {
      expect(
        screen.getByRole('button', { name: `Read more about ${title}` })
      ).toBeInTheDocument();
    });
  });
});
