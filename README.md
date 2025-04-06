# Prosty Tracker Wydatków w React
Wymagania:  
 
Twoim zadaniem jest stworzenie prostej aplikacji do śledzenia wydatków. Aplikacja powinna pozwalać użytkownikowi na dodaanie wydatków, filtrowanie ich według kategorii oraz usuwanie wybranych pozycji. Całość powinna dynamicznie aktualizować sumę wydatków. 
 
Wymagania funkcjonalne 
 
Formularz dodawania wydatków 
Formularz powinien zawierać pola: 
Nazwa wydatku (np. „Mleko”) 
Kwota wydatku (np. „5”) 
Kategoria (np. „Groceries”) 
Po kliknięciu „Submit” nowy wydatek powinien zostać dodany do listy. 
Jeśli użytkownik nie wypełni wszystkich pól, powinien otrzymać komunikat o błędzie. 
Po dodaniu wydatku formularz powinien zostać wyczyszczony. 
Lista wydatków 
Wyświetlona powinna być lista wszystkich wydatków w formie tabeli lub kart. 
Każdy wydatek powinien zawerać nazwę, kwotę i kategorię. 

Filtrowanie według kategori

Powinna istnieć możliwość filtrowania wydatków według kategorii. 
Jeśli użytkownik wybierze „Wszystkie”, powinny być widoczne wszystkie wydatki. 
Obliczanie całkowitej sumy wydatków 
Suma powinna być aktualizowana dynamicznie po dodaniu lub usunięciu wydatku. 
Powinna również dostosowywać się do aktualnie wybranej kategorii. 
Usuwanie wydatków 
Każdy wydatek powinien mieć przycisk „Usuń”, który pozwala na jego skasowanie. 
Po usunięciu wydatku suma powinna zostać zaktualizowana. 


Efekt:
Lewy blok odpowiada za formularz i wprowadzanie danych do tablicy produktów, validacja poprzez zod'a, warunkiem jest niezostawienie pustego pola.
Prawy blok odpowiada za wyświetlanie listy produktów wraz z buttonem od usuwania, poniżej wyświetla się łączna suma wybranych produktów, a poniżej jest selekcja kategorii działająca na inpucie od użytkownia.