import { useState } from 'react'
import { createRoot } from 'react-dom/client'

import '@public/global.css'

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar */}
			<nav className="bg-white shadow-sm border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<h1 className="text-xl font-semibold text-gray-900">
								Elysia Todos
							</h1>
						</div>
						<div className="flex items-center gap-4">
							<button className="text-gray-600 hover:text-gray-900">
								Sign Up
							</button>
							<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
								Sign In
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="flex-1 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Welcome to Elyisia ToDos
					</h2>
					<div className="bg-white rounded-lg shadow p-6">
						<p className="text-gray-600">
							Main content goes here
						</p>
					</div>
				</div>
			</main>
		</div>
	)
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)