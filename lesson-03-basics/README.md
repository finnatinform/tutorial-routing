# Lesson 03: Basic Components

There are three types of components in React Router: router components, route matching components, and navigation components.

## Preparation
```
npm install --save react-router @types/react-router react-router-dom @types/react-router-dom
```

## Routers
Router sind die Wurzel der gesamten Applikation.
Viele Beispiele, die man im Internet findet nutzen die Klasse "Router", dies ist jedoch veraltet. Man sollte einen der implementierten Router nutzen, wie wir z.B. den "BrowserRouter".
Wichtig ist: Router dürfen nur ein Child haben, daher lagern wir den Router in eine eigene Komponente aus und geben ihm die Applikation als Child.

## Route Matching
Es gibt zwei Möglichkeiten für das RouteMatching:

### Route
Route matching is done by comparing a <Route>'s path prop to the current location’s pathname. When a <Route> matches it will render its content and when it does not match, it will render null. A <Route> with no path will always match.
```tsx
            <div className="application">
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
            </div>
```

Also there is a exact property: When true, will only match if the path matches the location.pathname exactly.
```tsx
// Will not match when path is like "/one/two"
<Route exact path="/one" component={About}/>
// Will match when path is like "/one/two"
<Route path="/one" component={About}/>
```

### Switch
The <Switch> component is used to group <Route>s together.
The <Switch> is not required for grouping <Route>s, but it can be quite useful. A <Switch> will iterate over all of its children <Route> elements and only render the first one that matches the current location.
It can be used for e.g. 404 Pages.

```tsx
            <div className="application">
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
```


## Navigation
React Router provides a <Link> component to create links in your application. Wherever you render a <Link>, an anchor (a) will be rendered in your application’s HTML.
There also is a <NavLink> component, which has properties like 'isActive'.
```tsx
            <div className="application">
                <header>
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
```