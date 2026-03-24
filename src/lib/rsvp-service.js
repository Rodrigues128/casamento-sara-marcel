const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export const sendToGoogleSheets = async (formData) => {
  if (!GOOGLE_SHEETS_URL) {
    console.error('RSVP configuration missing');
    return false;
  }
  
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(formData),
    });
    return true;
  } catch (error) {
    console.error('Sync failed:', error);
    return false;
  }
};

export const openWhatsApp = (form) => {
  const phone = '556781437611';
  const attendanceText = form.attendance === 'confirmed' ? 'Sim, com alegria!' : 'Infelizmente não poderei comparecer';
  
  const message = [
    `📌 *NOVA CONFIRMAÇÃO* 💚❤️`,
    ``,
    `- *Nome:* ${form.guest_name}`,
    `- *Telefone:* ${form.phone}`,
    `- *Presença:* ${attendanceText}`,
    form.attendance === 'confirmed' ? `- *Número de pessoas:* ${form.companions}` : '',
    form.message ? `\n*Recado:* ${form.message}` : ''
  ].filter(Boolean).join('\n');

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
