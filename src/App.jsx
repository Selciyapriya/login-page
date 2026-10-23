import { useState } from 'react'

function App() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

function handleLogin(e) {
e.preventDefault()
alert('Login button clicked!')
}

return (
<div className="min-h-screen bg-gradient-to-br from-purple-200 via-violet-100 to-blue-100 flex items-center justify-center p-4">

<div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-purple-100">

<div className="text-center mb-7">
<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600 text-2xl text-white">
★
</div>

<h1 className="text-3xl font-bold text-purple-700">
Login Here!
</h1>

<p className="text-gray-500 mt-2">
Nice to see you again ✨
</p>
</div>

<form onSubmit={handleLogin}>

<label className="block mb-2 font-medium text-gray-700">
Email address
</label>

<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
className="w-full bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
/>

<label className="block mb-2 font-medium text-gray-700">
Password
</label>

<input
type="password"
placeholder="Enter your password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
className="w-full bg-purple-50 border border-purple-200 rounded-lg p-3 mb-6 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
/>

<button
type="submit"
className="w-full bg-purple-600 text-white font-semibold p-3 rounded-lg hover:bg-purple-700 transition"
>
Login →
</button>

</form>

<p className="text-center text-gray-500 mt-6 text-sm">
New here?{' '}
<a
href="#signup"
className="text-purple-700 font-semibold hover:underline"
>
Sign up
</a>
</p>

</div>
</div>
)
}

export default App