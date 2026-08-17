const EN = { salar: 'Salar de Uyuni', colorada: 'Laguna Colorada', titicaca: 'Lake Titicaca', chacaltaya: 'Chacaltaya', vallelunabo: 'Valle de la Luna, Bolivia', yungas: 'Yungas Road', arita: 'Salar de Arizaro' };
const poi = (id, name, coords, wiki) => ({ id, name, coords, wiki, enwiki: EN[id] });
const ROUTE = {
  now: { place: 'Puerto natales, Magallanes, CL', coords: [-72.506, -51.729] },
  stops: [
    { id: 'ushuaia', coords: [-68.303, -54.802], name: 'Ushuaia', status: 'done', window: null, pois: [
      poi('tdf', 'Tierra del Fuego National Park', [-68.57, -54.84], "Parque nacional Tierra del Fuego"),
      poi('beagle', 'Beagle Channel', [-68.2, -54.87], "Canal Beagle"),
      poi('martial', 'Glaciar Martial', [-68.4, -54.78], "Glaciar Martial")
    ] },
    { id: 'puerto-natales', coords: [-72.506, -51.729], name: 'Puerto Natales, CL', status: 'live', window: ['2026-07-20', '2026-08-15'], pois: [
      poi('paine', 'Torres del Paine National Park', [-72.99, -50.94], "Parque nacional Torres del Paine"),
      poi('ohiggins', "Bernardo O'Higgins National Park", [-73.6, -49.8], "Parque nacional Bernardo O'Higgins"),
      poi('milodon', 'Cueva del Milodón', [-72.62, -51.57], "Cueva del Milodón")
    ] },
    { id: 'el-calafate', coords: [-72.276, -50.34], name: 'El Calafate, AR', status: 'open', window: ['2026-08-15', '2026-08-22'], pois: [
      poi('perito', 'Perito Moreno Glacier', [-73.04, -50.47], "Glaciar Perito Moreno"),
      poi('lagoarg', 'Lago Argentino', [-72.6, -50.35], "Lago Argentino"),
      poi('nimez', 'Laguna Nimez Reserve', [-72.28, -50.33], "")
    ] },
    { id: 'el-chalten', coords: [-72.886, -49.331], name: 'El Chaltén, AR', status: 'open', window: ['2026-08-22', '2026-09-01'], pois: [
      poi('fitzroy', 'Monte Fitz Roy', [-73.04, -49.27], "Monte Fitz Roy"),
      poi('lostres', 'Laguna de los Tres', [-73.0, -49.28], ""),
      poi('cerrotorre', 'Cerro Torre', [-73.1, -49.29], "Cerro Torre"),
      poi('sanmartin', 'Lago San Martín', [-72.55, -48.9], "Lago San Martín")
    ] },
    { id: 'los-antiguos', coords: [-71.62, -46.55], name: 'Los Antiguos, AR', status: 'open', window: ['2026-09-01', '2026-09-08'], pois: [
      poi('lagobsas', 'Lago Buenos Aires', [-71.5, -46.62], "Lago Buenos Aires"),
      poi('manos', 'Cueva de las Manos', [-70.66, -47.15], "Cueva de las Manos"),
      poi('zeballos', 'Monte Zeballos', [-71.6, -46.9], ""),
      poi('chilechico', 'Chile Chico', [-71.72, -46.54], "Chile Chico")
    ] },
    { id: 'bariloche', coords: [-71.31, -41.133], name: 'Bariloche, AR', status: 'open', window: ['2026-09-08', '2026-09-22'], pois: [
      poi('catedral', 'Cerro Catedral', [-71.44, -41.17], "Cerro Catedral"),
      poi('chico', 'Circuito Chico', [-71.5, -41.11], ""),
      poi('tronador', 'Cerro Tronador', [-71.88, -41.16], "Tronador"),
      poi('blest', 'Puerto Blest', [-71.81, -41.02], "")
    ] },
    { id: 'san-martin', coords: [-71.353, -40.158], name: 'San Martín de los Andes', status: 'open', window: ['2026-09-22', '2026-09-30'], pois: [
      poi('lanin', 'Lanín National Park', [-71.5, -39.7], "Parque nacional Lanín"),
      poi('lacar', 'Lago Lácar', [-71.5, -40.17], "Lago Lácar"),
      poi('sietelagos', 'Ruta de los Siete Lagos', [-71.55, -40.6], "")
    ] },
    { id: 'melipeuco', coords: [-71.7, -38.85], name: 'Melipeuco, CL', status: 'open', window: ['2026-09-30', '2026-10-08'], pois: [
      poi('conguillio', 'Conguillío National Park', [-71.65, -38.68], "Parque nacional Conguillío"),
      poi('llaima', 'Volcán Llaima', [-71.73, -38.69], "Llaima"),
      poi('truful', 'Salto Truful-truful', [-71.68, -38.75], "")
    ] },
    { id: 'caviahue', coords: [-71.09, -37.87], name: 'Caviahue, AR', status: 'open', window: ['2026-10-08', '2026-10-15'], pois: [
      poi('copahue', 'Volcán Copahue', [-71.18, -37.85], "Copahue"),
      poi('termas', 'Termas de Copahue', [-71.15, -37.82], ""),
      poi('agrio', 'Salto del Agrio', [-71.03, -37.79], "")
    ] },
    { id: 'talca', coords: [-71.666, -35.426], name: 'Talca, CL', status: 'open', window: ['2026-10-15', '2026-10-25'], pois: [
      poi('sietetazas', 'Radal Siete Tazas', [-70.99, -35.47], "Parque nacional Radal Siete Tazas"),
      poi('lircay', 'Altos de Lircay', [-71.07, -35.6], ""),
      poi('maule', 'Maule Wine Valley', [-71.6, -35.62], "")
    ] },
    { id: 'santiago', coords: [-70.669, -33.448], name: 'Santiago, CL', status: 'open', window: ['2026-10-25', '2026-11-05'], pois: [
      poi('sancristobal', 'Cerro San Cristóbal', [-70.63, -33.42], "Cerro San Cristóbal (Santiago)"),
      poi('valpo', 'Valparaíso', [-71.62, -33.05], "Valparaíso"),
      poi('maipo', 'Cajón del Maipo', [-70.2, -33.7], "Cajón del Maipo")
    ] },
    { id: 'mendoza', coords: [-68.845, -32.889], name: 'Mendoza, AR', status: 'open', window: ['2026-11-05', '2026-11-18'], pois: [
      poi('aconcagua', 'Aconcagua Provincial Park', [-70.01, -32.65], "Aconcagua"),
      poi('uco', 'Valle de Uco', [-69.2, -33.7], "Valle de Uco"),
      poi('puenteinca', 'Puente del Inca', [-69.91, -32.82], "Puente del Inca")
    ] },
    { id: 'villa-union', coords: [-68.23, -29.31], name: 'Villa Unión, AR', status: 'open', window: ['2026-11-18', '2026-11-26'], pois: [
      poi('talampaya', 'Talampaya National Park', [-67.85, -29.78], "Parque nacional Talampaya"),
      poi('ischigualasto', 'Ischigualasto, Valle de la Luna', [-67.95, -30.16], "Parque provincial Ischigualasto"),
      poi('lagunabrava', 'Laguna Brava', [-68.85, -28.4], "Reserva provincial Laguna Brava"),
      poi('miranda', 'Cuesta de Miranda', [-67.75, -29.36], "Cuesta de Miranda")
    ] },
    { id: 'tinogasta', coords: [-67.56, -28.06], name: 'Tinogasta, AR', status: 'open', window: ['2026-11-26', '2026-12-04'], pois: [
      poi('duna', 'Duna Mágica, Fiambalá', [-67.62, -27.68], ""),
      poi('termasfiam', 'Termas de Fiambalá', [-67.55, -27.66], ""),
      poi('seismiles', 'Ruta de los Seismiles', [-68.4, -27.4], ""),
      poi('adobe', 'Ruta del Adobe', [-67.6, -27.85], "")
    ] },
    { id: 'cafayate', coords: [-65.976, -26.073], name: 'Cafayate, AR', status: 'open', window: ['2026-12-04', '2026-12-15'], pois: [
      poi('conchas', 'Quebrada de las Conchas', [-65.78, -25.9], "Quebrada de Cafayate"),
      poi('calchaquies', 'Valles Calchaquíes', [-66.2, -25.6], "Valles Calchaquíes"),
      poi('cachi', 'Ruta 40 to Cachi', [-66.16, -25.12], "Cachi (Salta)")
    ] },
    { id: 'tolar-grande', coords: [-67.38, -24.59], name: 'Tolar Grande, AR', status: 'open', window: ['2026-12-15', '2026-12-22'], pois: [
      poi('ojosdelmar', 'Ojos del Mar', [-67.38, -24.6], ""),
      poi('diablo', 'Desierto del Diablo', [-67.45, -24.5], ""),
      poi('arizaro', 'Salar de Arizaro', [-67.7, -24.7], "Salar de Arizaro"),
      poi('arita', 'Cono de Arita', [-67.77, -24.98], "Cono de Arita (Salta)")
    ] },
    { id: 'purmamarca', coords: [-65.5, -23.74], name: 'Purmamarca, AR', status: 'open', window: ['2026-12-22', '2027-01-03'], pois: [
      poi('sietecolores', 'Cerro de los Siete Colores', [-65.5, -23.75], "Purmamarca"),
      poi('salinas', 'Salinas Grandes', [-65.9, -23.6], "Salinas Grandes (Jujuy y Salta)"),
      poi('lipan', 'Cuesta de Lipán', [-65.65, -23.6], ""),
      poi('humahuaca', 'Quebrada de Humahuaca', [-65.35, -23.2], "Quebrada de Humahuaca")
    ] },
    { id: 'atacama', coords: [-68.2, -22.91], name: 'San Pedro de Atacama, CL', status: 'open', window: ['2027-01-03', '2027-01-15'], pois: [
      poi('vallelunacl', 'Valle de la Luna', [-68.3, -22.92], ""),
      poi('tatio', 'Géiseres del Tatio', [-68.01, -22.33], "El Tatio"),
      poi('cejar', 'Laguna Cejar', [-68.2, -23.07], ""),
      poi('piedrasrojas', 'Piedras Rojas', [-67.85, -23.7], "")
    ] },
    { id: 'uyuni', coords: [-66.83, -20.46], name: 'Uyuni, BO', status: 'open', window: ['2027-01-15', '2027-01-25'], pois: [
      poi('salar', 'Salar de Uyuni', [-67.5, -20.3], "Salar de Uyuni"),
      poi('incahuasi', 'Isla Incahuasi', [-67.79, -20.24], "Isla del Pescado"),
      poi('trenes', 'Cementerio de Trenes', [-66.86, -20.49], ""),
      poi('colorada', 'Laguna Colorada', [-67.79, -22.19], "Laguna Colorada")
    ] },
    { id: 'la-paz', coords: [-68.15, -16.5], name: 'La Paz, BO', status: 'open', window: ['2027-01-25', '2027-02-08'], pois: [
      poi('vallelunabo', 'Valle de la Luna, La Paz', [-68.1, -16.57], "Valle de la Luna (Bolivia)"),
      poi('chacaltaya', 'Chacaltaya', [-68.13, -16.35], "Chacaltaya"),
      poi('yungas', 'Camino de los Yungas', [-67.85, -16.3], "Yungas Road"),
      poi('titicaca', 'Lago Titicaca', [-69.09, -16.16], "Lago Titicaca")
    ] }
  ]
};

export { ROUTE };
