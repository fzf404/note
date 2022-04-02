<!--
title: LaTeX
sort:
-->

## 快速入门

```latex
\documentclass{article}
\usepackage[UTF8]{ctex}
\usepackage{graphicx}

\title{第一篇LaTeX文档}
\author{fzf404}
\date{\today}

\begin{document}

\maketitle

\section{Introduction}

\subsection{这是LaTeX的介绍}

\textbf{LaTeX}，是一种基于ΤΕΧ的排版系统，由美国计算机学家\textit{莱斯利·兰伯特}在\underline{20世纪80年代初期}开发，利用这种格式，即使使用者没有排版和程序设计的知识也可以充分发挥由TeX所提供的强大功能。

对于生成复杂表格和数学公式，这一点表现得尤为突出。因此它非常适用于生成高印刷质量的科技和数学类文档。

\begin{itemize}
    \item $E=m*c^2$
\end{itemize}

\begin{enumerate}
    \item a
\end{enumerate}

\begin{equation}
    E=mc^2
\end{equation}

\begin{figure}
    \centering
    \includegraphics[width=0.2\textwidth]{imgName}
    \caption{啥都没有}
\end{figure}


\end{document}
```

![image-20210119220846630](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/image-20210119220846630.png)
