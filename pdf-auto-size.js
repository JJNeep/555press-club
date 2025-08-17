function resizeViewer() {
      const container = document.querySelector('.pdf-container');
      const isMobile = window.innerWidth < 600;
      container.style.maxWidth = isMobile ? '100%' : '800px';
    }
    
    window.addEventListener('resize', resizeViewer);
    resizeViewer();
