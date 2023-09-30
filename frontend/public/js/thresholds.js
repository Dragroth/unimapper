/* eslint-disable no-undef */

// Cities
VirtualSelect.init({
    ele: '#city',
    options: [
      { label: 'Kraków', value: '1' },
      { label: 'Warszawa', value: '2' },
      { label: 'Gdańsk', value: '3' },
      { label: 'Ciechocinek', value: '4' },
    ],
    multiple: true,
    search: true,
    maxWidth: '275px',
    searchPlaceholderText: 'Szukaj',
    allOptionsSelectedText: 'Wszystko',
    optionsSelectedText: 'Wybrano'
  });
  
  // Universities
  VirtualSelect.init({
      ele: '#university',
      options: [
        { label: 'Politechnika Krakowska', value: '1' },
        { label: 'Politechnika Warszawska', value: '2' },
        { label: 'Politechnika Poznańska', value: '3' },
        { label: 'Politechnika Wrocławska', value: '4' },
      ],
      multiple: true,
      search: true,
      maxWidth: '275px',
      searchPlaceholderText: 'Szukaj',
      allOptionsSelectedText: 'Wszystko',
      optionsSelectedText: 'Wybrano'
    });
  
  // Departments
  VirtualSelect.init({
    ele: '#department',
    options: [
      { label: 'Administracja', value: '1' },
      { label: 'Informatyka', value: '2' },
      { label: 'Archeologia', value: '3' },
      { label: 'Architektura', value: '4' },
    ],
    multiple: true,
    search: true,
    maxWidth: '275px',
    searchPlaceholderText: 'Szukaj',
    allOptionsSelectedText: 'Wszystko',
    optionsSelectedText: 'Wybrano'
  });
  
  // Intrests
  VirtualSelect.init({
      ele: '#intrest',
      options: [
        { label: 'Programowanie', value: '1' },
        { label: 'Czytanie', value: '2' },
        { label: 'Astronomia', value: '3' },
        { label: 'Jedzenie', value: '4' },
      ],
      multiple: true,
      search: true,
      maxWidth: '275px',
      searchPlaceholderText: 'Szukaj',
      allOptionsSelectedText: 'Wszystko',
      optionsSelectedText: 'Wybrano'
  });
  
  
  // 
  
  VirtualSelect.init({
    ele: '#subject',
    options: [
      { label: '', value: '1', description: 'Cipa' },
      { label: 'Historia', value: '2' },
      { label: 'Informatyka', value: '3' },
      { label: 'Biologia', value: '4' },
      { label: 'Pszyrka', value: '5' },
      { label: '', value: '6', description: 'Chuj' },
      { label: 'Jebanie', value: '7' },
    ],
    disabledOptions: [1, 6],
    labelRenderer: sampleLabelRenderer,
    multiple: false,
    search: true,
    maxWidth: '275px',
    searchPlaceholderText: 'Szukaj',
    allOptionsSelectedText: 'Wszystko',
    optionsSelectedText: 'Wybrano',
    hasOptionDescription: true,
  });
  
  function sampleLabelRenderer(data) {
    let prefix = '';
  
    /** skipping options those are added newly by allowNewOption feature */
    if (!data.isCurrentNew && !data.isNew) {
      /** project developer has to add their own logic to create image/icon tag */
      prefix = `<p>dupa</p>`;
    } else {
      /** common image/icon could be added for new options */
    }
  
    return `${prefix}${data.label}`;
  }