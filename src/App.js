import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';
import Home from './pages/Home';
import Following from './pages/Following';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component
                        return <Route
                            key={index}
                            path={route.path}
                            element={<Layout>
                                <Page />
                            </Layout>} />;
                    })}





                    {/* {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })} */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

