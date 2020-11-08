import type { Route } from './route.interface';

import PagePlayers from './Pages/Tournament/Players.svelte';
import PagePoule from './Pages/Tournament/Poule.svelte';
import PageTournament from './Pages/Tournament/Info.svelte';
import PageTournamentList from './Pages/List.svelte';
import Page404 from './Pages/404.svelte';


function smartPath(url: string): RegExp {
  return new RegExp("^" + url.replace(/:(\w+)/g, (_, name) => `(?<${name}>\\w+)`));
}

export const routes: Route[] = [
  { path: smartPath("/tournament/:id/info"), component: PageTournament },
  { path: smartPath("/tournament/:id/poule"), component: PagePoule },
  { path: smartPath("/tournament/:id/players"), component: PagePlayers },

  // Old routes
  { path: /^tournament\/?/, component: PageTournament },
  { path: /^players\/?/, component: PagePlayers },
  { path: /^poule\/?/, component: PagePoule },
  { path: /^tournaments$/, component: PageTournamentList },

  // The index page and 404
  { path: "", component: PageTournamentList },
  { path: _ => true, component: Page404 },
];
