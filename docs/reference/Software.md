# Software

## upstream
软件上游 URL，打包者获取此软件的官方发布页面。
- **类型：** `String`
- **细节**

    通常使用包含明显“下载”按钮的官方网站作为上游链接，如果没有提供这样的页面则使用软件官方网站首页或类似于 GitHub 仓库链接的地址。
- **示例**
    ```toml
    upstream = "https://code.visualstudio.com/"
    ```

## category
软件分类，用于标识软件的大致应用范围。
- **类型：** `String`
- **细节**

    推荐使用 Edgeless PE 下载站已有分类中的一种。如果认为没有合适的分类请新建分类。
- **示例**
    ```toml
    category = "集成开发"
    ```

## tags
软件标签，用于关联同类软件，便于用户快速查找相似软件。
- **类型：** `Array<String>`
- **细节**

    建议将资源名称的同义词（如 `VSCode` 的同义词有 `Visual Studio Code` `vsc` `code` 等）和相关话题（如 `electron`）加入此处，可以在分类或作者中体现的标签（如`集成开发` `IDE` `Microsoft`）请不要加到这里。
- **示例**
    ```toml
    tags = ["Visual Studio Code", "code", "electron"]
    ```

## language
软件语言。
- **类型：** `Enum<String>`
- **取值：** `{"Multi", "zh-CN", "en-US"}`
- **细节**

    `Multi` 表示支持多语言，暂不支持其他语言。
- **示例**
    ```toml
    language = "Multi"
    ```
