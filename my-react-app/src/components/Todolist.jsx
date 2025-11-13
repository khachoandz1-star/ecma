function TodoList() {
    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-xl border border-indigo-100">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
                📝 Todo List <span className="text-gray-500 text-lg">(v1)</span>
            </h1>

            <ul className="space-y-3">
                <li className="flex items-center p-4 bg-white rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-200">
                    <span className="flex-1 text-gray-800 font-medium">Học React</span>
                    <span className="text-sm text-indigo-500 font-semibold bg-indigo-50 px-2 py-1 rounded-lg">Đang làm</span>
                </li>

                <li className="flex items-center p-4 bg-white rounded-xl border border-green-100 hover:shadow-md transition-all duration-200">
                    <span className="flex-1 text-gray-800 font-medium line-through text-gray-400">Làm bài tập</span>
                    <span className="text-green-500 text-xl">✓</span>
                </li>

                <li className="flex items-center p-4 bg-white rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-200">
                    <span className="flex-1 text-gray-800 font-medium">Review code</span>
                    <span className="text-sm text-yellow-600 font-semibold bg-yellow-50 px-2 py-1 rounded-lg">Chưa xong</span>
                </li>
            </ul>

            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl transition duration-200 shadow-md">
                + Thêm công việc
            </button>
        </div>
    );
}

export default TodoList;
