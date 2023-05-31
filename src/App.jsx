import MultiStepForm from './components/MultiStepForm.jsx'
import {StateProvider} from './context/StateProvider.jsx'

function App() {
    return (
        <>
            <main>
                <StateProvider>
                    <MultiStepForm/>
                </StateProvider>
            </main>

        </>
    )
}

export default App
