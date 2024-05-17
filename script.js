let currentIndex = 0; 
// Zmienna przechowująca indeks aktualnie wyświetlanej karty
const tabs = document.querySelectorAll('.tab');
 // Pobieranie wszystkich elementów z klasą 'tab'
const totalTabs = tabs.length; 
// Określenie całkowitej liczby kart
const thumbnails = document.querySelectorAll('.thumb'); 
// Pobieranie wszystkich elementów z klasą 'thumb'

function updateGallery() {
    // Funkcja aktualizująca galerię, aby wyświetlać tylko bieżącą kartę i aktualizować miniatury
    tabs.forEach((tab, index) => {
        // Przejście przez każdą kartę i ustawienie stylu 'display'
        tab.style.display = index === currentIndex ? 'block' : 'none'; 
        // Wyświetl aktualną kartę, ukryj pozostałe
    });
    thumbnails.forEach((thumb, index) => {
        // Przejście przez każdą miniaturę i aktualizacja klasy 'active'
        thumb.classList.toggle('active', index === currentIndex); 
        // Dodaj klasę 'active' do aktualnej miniatury, usuń z pozostałych
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    // Dodanie nasłuchiwania na kliknięcie przycisku 'nextBtn'
    currentIndex = (currentIndex + 1) % totalTabs; 
    // Zwiększ indeks bieżącej karty i zawijaj na początku, jeśli to konieczne
    updateGallery(); 
    // Zaktualizuj galerię, aby wyświetlić nową bieżącą kartę
});

document.getElementById('prevBtn').addEventListener('click', () => {
    // Dodanie nasłuchiwania na kliknięcie przycisku 'prevBtn'
    currentIndex = (currentIndex - 1 + totalTabs) % totalTabs; 
    // Zmniejsz indeks bieżącej karty i zawijaj na końcu, jeśli to konieczne
    updateGallery(); 
    // Zaktualizuj galerię, aby wyświetlić nową bieżącą kartę
});

thumbnails.forEach(thumb => {
    // Przejście przez każdą miniaturę i dodanie nasłuchiwania na kliknięcie
    thumb.addEventListener('click', () => {
        currentIndex = parseInt(thumb.getAttribute('data-index'));
         // Ustawienie indeksu bieżącej karty na indeks klikniętej miniatury
        updateGallery(); 
        // Zaktualizuj galerię, aby wyświetlić wybraną kartę
    });
});

setInterval(() => {
    // Ustawienie automatycznego przełączania kart co 3 sekundy
    currentIndex = (currentIndex + 1) % totalTabs; 
    // Zwiększ indeks bieżącej karty i zawijaj na początku, jeśli to konieczne
    updateGallery(); 
    // Zaktualizuj galerię, aby wyświetlić nową bieżącą kartę
}, 3000);

updateGallery(); 
// Początkowe wywołanie funkcji aktualizującej galerię, aby ustawić początkowy stan
