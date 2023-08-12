export const scrollToIdWithOffset = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };