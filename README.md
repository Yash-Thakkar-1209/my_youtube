# Low Level Design Of Project
  -Header
  -Body
     -SideBar
     - Main Container
       -ButtonList
       -VideoContainer

# Debouncing
// - key - i
//    - Re-render the search component
//    - useEffect();
//    -start timer => make api call after 200 ms

// - key press ip
//   -destroy the component (useEffect return method)
//   -re render the component
//   - useEffect()
//   - start timer => make a api call after 200ms

// - setTimeout(200) - make an api call