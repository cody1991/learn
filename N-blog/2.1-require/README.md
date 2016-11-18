判断是否是程序的入口文件有两种方式:

	require.main === module（推荐）
	module.parent === null