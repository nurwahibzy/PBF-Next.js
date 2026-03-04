# jika melakukan duplikat project jika terjadi error maka lakukan clean rebuild

caranya 

* hapus folder .next
* rm -rf node\_modules / hapus folder node\_modules
* rm package-lock.json / hapus file nya
* npm cache clean --force
* npm install
* npm run dev

Atau langsung jalankan peritah berikut di terminal:

CMD:
> rmdir /s /q .next & rmdir /s /q node_modules & del /q package-lock.json & npm cache clean --force & npm install & npm run dev

PowerShell:
> Write-Host "[1/4] Menghapus .next, node_modules, & package-lock.json..." -ForegroundColor Cyan; Remove-Item -Recurse -Force .next, node_modules, package-lock.json -ErrorAction SilentlyContinue; Write-Host "[2/4] Membersihkan cache npm..." -ForegroundColor Cyan; npm cache clean --force; Write-Host "[3/4] Menginstall dependencies (npm install)..." -ForegroundColor Cyan; npm install; Write-Host "[4/4] Menjalankan server (npm run dev)..." -ForegroundColor Green; npm run dev

# jika tsconfig terjadi problem 
solusinya

* npm install --save-dev typescript @types/react @types/react-dom
* tutup vscode dan buka kembali



