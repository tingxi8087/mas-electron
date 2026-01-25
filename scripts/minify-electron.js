import { minify } from 'terser';
import * as fs from 'fs';
import * as path from 'path';

async function minifyElectronFiles() {
  const electronDistPath = './dist/electron';
  
  // 获取dist/electron目录下所有js文件
  const files = fs.readdirSync(electronDistPath);
  const jsFiles = files.filter(file => path.extname(file) === '.js' && !file.endsWith('.min.js'));

  console.log(`找到 ${jsFiles.length} 个JS文件需要处理:`, jsFiles);

  for (const file of jsFiles) {
    const filePath = path.join(electronDistPath, file);
    const sourceCode = fs.readFileSync(filePath, 'utf8');
    
    try {
      console.log(`正在处理文件: ${file}`);
      
      // 使用Terser进行深度压缩混淆，启用所有混淆选项
      const result = await minify(sourceCode, {
        module: false,                    // 确保非ES模块处理
        compress: {
          drop_console: true,             // 移除console语句
          drop_debugger: true,            // 移除debugger语句
          unused: true,                   // 移除未使用代码
          dead_code: true,                // 移除死代码
          toplevel: true,                 // 在顶层作用域移除未使用变量
        },
        format: {
          comments: false,                // 移除所有注释
          beautify: false,                // 不美化输出，保持最小化
          preserve_annotations: false     // 不保留注释标注
        }
      });

      // 将混淆后的代码写回原文件
      fs.writeFileSync(filePath, result.code);
      console.log(`成功处理文件: ${file}`);
    } catch (error) {
      console.error(`处理文件 ${file} 时出错:`, error);
    }
  }

  console.log('Electron文件混淆压缩完成！');
}

minifyElectronFiles().catch(console.error);