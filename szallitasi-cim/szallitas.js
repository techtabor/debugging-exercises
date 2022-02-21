let szallitasiAdatok = { nev: '', cim: '' };
let szamlazasiAdatok = { nev: '', cim: '' };

const osszefoglaloNode = document.getElementById('osszefoglalo');

function osszefoglalo() {
  return `
    A jelenlegi szállítási név: ${szallitasiAdatok.nev}.
    A jelenlegi szállítási cím: ${szallitasiAdatok.cim}.\n
    A jelenlegi számlázási név: ${szamlazasiAdatok.nev}.
    A jelenlegi számlázási cím: ${szamlazasiAdatok.cim}.
  `;
}

document.getElementById("szallitasi_nev").addEventListener('change', event => {
  szallitasiAdatok.nev = event.target.value;
  osszefoglaloNode.innerText = osszefoglalo();
});

document.getElementById("szallitasi_cim").addEventListener('change', event => {
  szallitasiAdatok.cim = event.target.value;
  osszefoglaloNode.innerText = osszefoglalo();
});

document.getElementById("init_szamlazasi_cim").addEventListener('click', event => {
  szamlazasiAdatok = szallitasiAdatok;
  document.getElementById('szamlazasi_adatok').style.display = 'block';
  document.getElementById('szamlazasi_nev').value = szamlazasiAdatok.nev;
  document.getElementById('szamlazasi_cim').value = szamlazasiAdatok.cim;
  document.getElementById("init_szamlazasi_cim").disabled = true;
});

document.getElementById("szamlazasi_nev").addEventListener('change', event => {
  szamlazasiAdatok.nev = event.target.value;
  osszefoglaloNode.innerText = osszefoglalo();
});

document.getElementById("szamlazasi_cim").addEventListener('change', event => {
  szamlazasiAdatok.cim = event.target.value;
  osszefoglaloNode.innerText = osszefoglalo();
});