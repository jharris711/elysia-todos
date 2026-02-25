import '@public/global.css'

export default function App() {
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
						<h3 className="text-2xl font-bold text-gray-900 mb-6">Add a ToDo:</h3>
							<form action="" method="POST">
								<div className="mb-5">
									<label
										htmlFor="title"
										className="mb-3 block text-base font-medium text-[#07074D]"
									>
										Title
									</label>
									<input
										type="text"
										name="title"
										id="title"
										placeholder="Title for ToDo"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
								<div className="mb-5">
									<label
										htmlFor="todo"
										className="mb-3 block text-base font-medium text-[#07074D]"
									>
										ToDo
									</label>
									<textarea
										rows={4}
										name="todo"
										id="todo"
										placeholder="Type your ToDo here"
										className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									></textarea>
								</div>
								<div>
									<button
										className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
									>
										Submit
									</button>
								</div>
							</form>
					</div>
				</div>
			</main>
		</div>
	)
}
