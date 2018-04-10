Boostsrap3 Gulp 快速建立靜態切版目錄
============================
包括下列這些需求，如果剛好你也需要，那麼應該會很適合你。

- 慣用 SCSS 來撰寫 CSS
- 使用 Boostsrap3
- 希望修改 HTML或CSS 可直接檢視更新頁面 livereload (不用另外重整或打開)

*※本流程會使用  [node](https://nodejs.org/en/)、[Git](https://git-scm.com/)、[Visual Studio Code](https://code.visualstudio.com/) (或其他編輯器) 請先完成安裝*   

如何開始
-----------------------
1. **檔案放至專案**     
    打開命令提示字元，前往你的目錄位置，放入這些檔案。   
    ``git clone https://github.com/suhan1220/bs3work.git``  
    或是直接下載檔案放到你的目錄中。   
    ![image](https://thumbs2.imgbox.com/5f/f0/3lpGKSKF_t.png)

2. **安裝 npm**     
    在命令提示字元輸入   
    ```
    npm install
    ```    
    這是藉由已寫好的 package.json 安裝 npm ，會使用的 gulp、Boostsrap3 SCSS... ，結束後就會一併下載套件就會在 node_modules 資料夾中了。     
    ![image](https://thumbs2.imgbox.com/bc/0f/9bFIHfoW_t.png)    

3. **運用 Gulp 建立 Boostsrap3 相關檔案在目錄中**   
    在命令提示字元輸入   
    ```
    gulp setpj
    ```
    這是我寫好的 Gulp task，他會幫你把 node_modules 中 Boostsrap3 的檔案複製到你的目錄中，如果你稍稍研究 Gulp 相關應用也可以修改裡面的內容。  
     ![image](https://thumbs2.imgbox.com/57/67/8LSHPPPe_t.png)    

4. **設定用 SCSS 檔放入**     
    將``main.scss``、``_bootstrap-custom.scss``兩個檔案放入 styles 資料夾中。

5. **成功 livereload 與輸出 CSS 檔並** 
    在命令提示字元輸入   
    ```
    gulp
    ```
    這時會執行 gulp default，應該會出現 livereload 資訊。   
    - 在瀏覽器打開相應的網址，EX：http://localhost:8000     
     ![image](https://images2.imgbox.com/07/a8/Ai2NdQh9_o.png)    
     ![image](https://images2.imgbox.com/0d/dc/0lhhwEiX_o.png)  
     只要沒有用 Ctrl + C 結束這個靜態頁面也可以有直接更新檢視的效果了。(省去重整的時間) 
    - 這時在 沒有停止 Livereload 的時候 點擊 main.scss 進行存檔動作，Gulp 便會執行 CSS 輸出。 
 
    - 回到看到 index.html 便可看見成功畫面，就完成我們的目標了，可以開始進行切版工作了 ^_^    
    ![image](https://images2.imgbox.com/e9/1b/lx2lzCGD_o.png)

