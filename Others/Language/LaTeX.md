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

![image-20210119220846630](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2021/image-20210119220846630.png)

## 公式

```latex
% 行内公式
$ f(x) = a+b $
% 行间公式
$$ f(x) = a+b $$
% 编号 1
$$ f(x) = a - b \tag{1.1} $$

% 符号
\cdot	点乘 \neq 不等号 
\equiv 恒等于 \bmod 取模

% 上标下标 2
$$ a_{i}^{2} + b^3_{2}=x^{t} + y' + x''_{12} $$

% 根号 3
\sqrt{x} 根号 \frac{x}{m} 分式
$$ \sqrt{x} + \sqrt{x^{2}+\sqrt{y}} = \sqrt[3]{k_{i}} - \frac{x}{m} $$

% 极限 积分 求和 乘积 4 5
$$ \lim_{x \to \infty} x^2_{22} - \int_{1}^{5}x\mathrm{d}x + \sum_{n=1}^{20} n^{2} $$
$$ \prod_{j=1}^{3} y_{j}  + \lim_{x \to -2} \frac{x-2}{x} $$

% 符号
\Delta

% 矩阵 6
$$\begin{bmatrix} 1&2&3 \\ 4&5&6 \end{bmatrix}$$
```

$$ f(x) = a - b \tag{1}$$

$$  a_{i}^{2} + b^3_{2}=x^{t} + y' + x''_{12} \tag{2}$$

$$ \sqrt{x} + \sqrt{x^{2}+\sqrt{y}} = \sqrt[3]{k_{i}} - \frac{x}{m} \tag{3}$$

$$ \lim_{x \to \infty} x^2_{22} - \int_{1}^{5}x\mathrm{d}x + \sum_{n=1}^{20} n^{2} \tag{4}$$

$$ \prod_{j=1}^{3} y_{j}  + \lim_{x \to -2} \frac{x-2}{x} \tag{5}$$

$$\begin{bmatrix} 1&2&3 \\ 4&5&6 \end{bmatrix} \tag{6}$$