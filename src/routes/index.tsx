import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage, SkillsPage, ExperiencesPage, ContainerPage } from '../pages/index'

export default function MyRoutes() {
    return (
        <Router>
          <Routes>
            Route: <Route path="/" element={<ContainerPage />} />
            Route: <Route path={`/`} element={<HomePage />} />
            Route: <Route path={`/experiences`} element={<ExperiencesPage />} />
            Route: <Route path={`/skills`} element={<SkillsPage />} />
            Route: <Route path={`/about`} element={<AboutPage />} />
            Route: <Route path={`/contact`} element={<ContactPage />} />
          </Routes>
        </Router>
    )
}

