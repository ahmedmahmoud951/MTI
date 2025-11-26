@echo off
setlocal enabledelayedexpansion
set PATH=C:\Program Files\nodejs;%PATH%
cd /d e:\Company\mti-engineering
cls
echo.
echo =====================================
echo   MTI Engineering Solutions
echo   Development Server
echo =====================================
echo.
echo Starting Next.js development server...
echo The website will be available at http://localhost:3001
echo.
npm run dev
pause
