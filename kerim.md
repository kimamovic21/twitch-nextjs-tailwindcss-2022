1. napravimo repozitoriji pomocu github dekstop aplikacije
2. otvorimo terminal i instaliramo npm create next-app .
3. dodamo .babelrc fajl
4. instaliramo tailwind u terminalu
5. otvaramo i uredujemo index.js fajl
6. otvaramo i uredujemo _app.js fajl
7. kreiramo novi folder components
8. u components folderu kreiramo Navbar.jsx komponentu
9. otvaramo i uredujemo Navbar.jsx komponentu
10. otvaramo i uredujemo globals.css fajl
11. otvaramo terminal i instaliramo npm install @headlessui/react
12. otvaramo terminal i instaliramo npm install react-icons
13. kreiramo i uredujemo MyDropdown.jsx komponentu
14. otvaramo stranicu https://next-auth.js.org/
15. otvaramo terminal i instaliramo npm i next-auth
16. u api folderu kreiramo auth folder
17. u auth folderu kreiramo nextauth.js fajl
18. uredujemo nextauth.js fajl
19. otvaramo i uredujemo _app.js fajl
20. otvorimo github stranicu i odlazimo na podesenja
21. kliknemo developer settings
22. kliknemo OAuth apps
23. kliknemo dugme za registraciju aplikacije
24. unesemo ime aplikacije (po izboru)
25. Homepage url : http://localhost:3000
26. Opis aplikacije (po izboru)
27. Authorization callback URL : http://localhost:3000/api/auth/callback/github
28. otvaramo i uredujemo env fajl
29. kliknemo dugme za generisanje nove tajne
30. kopiramo kod u env fajl
31. otvorimo link https://medium.com/swlh/installing-openssl-on-windows-10-and-updating-path-80992e26f6a1
32. u terminal kopiramo openssl rand -base64 32
33. kreiramo i otvoramo account.jsx komponentu
34. uredujemo account.jsx komponentu
35. kliknemo sign in with github dugme
36. otvorimo web stranicu https://developers.google.com/
37. kliknemo na search dugme i ukucamo google auth
38. kliknemo Using OAuth 2.0 for Web Server Applications
39. kliknemo na overview
40. kliknemo na Google API konzolu
41. kad se otvori konzola kliknemo na OAuth consent screen sa lijeve strane
42. kreiramo neki novi projekat (ime po izboru)
43. odaberemo user type external
44. unesemo podatke (email)
45. kliknemo save and continue do kraja
46. nakon toga kliknemo na credentials -> + create credentials OAuth client ID
47. odaberemo kao tip aplikacije web aplikaciju
48. dodamo kao URL https://localhost:3000
49. Authorized redirect URIs : https://localhost:3000/api/auth/callback/google
50. nakon toga kliknemo create
51. otvaramo i uredujemo .env fajl id-eve za google auth
52. u next.js congig fajlu moramo urediti module exports
53. kreiramo i uredujemo MyDropdown1.jsx komponentu
54. 
