# 动效解释

### 自然和谐

一切动效均以「符合自然」的形式呈现，用户会感到自然亲切，依此适应这个设计系统，带来愉悦的体验。

### 效率足够

时长刚刚好，方向符合用户预期，不破坏视觉动线。

## 时长标准

当需要展示新出现于视野中的小型菜单的时候，采用 `350ms` 时长的动画

同时，使用如下的贝塞尔曲线

```css
cubic-bezier(0.62, 0.02, 0.18, 1.2)
```

当需要展示新出现于视野中的大型菜单的时候，采用 `400ms` 时长的动画

同时，使用如下的贝塞尔曲线

```css
cubic-bezier(0.66, 0, 0, 1.1)
```

当需要展示新出现于视野中的弹窗的时候，采用 `650ms` 时长的动画

同时，使用如下的贝塞尔曲线

```css
cubic-bezier(0.58, 0, 0, 1.4)
```


当需要让小型组件切换状态的时候，采用 `150ms` 时长的动画

同时，使用如下的贝塞尔曲线

```css
ease-in-out
```

当需要展示全屏背景遮罩层的时候，背景遮罩层采用 `400ms` 时长的动画

同时，使用如下的贝塞尔曲线

```css
ease-in-out
```

## 下降展开小菜单动画

向用户展示诸如下拉菜单等在用户视野中新出现的菜单时，可以采用这种动画类型。

#### CSS 代码

```css
.list-show{
    animation-name: spiral-list-show;
    animation-duration: 350ms;
    animation-fill-mode: both;
    transition-timing-function: cubic-bezier(0.61, 0.01, 0.18, 1.2);
}
@keyframes spiral-list-show{
    0%{
        visibility: hidden;
        opacity: 0;
        max-height: 0px;
        overflow: hidden;
        transform: scale(1, 0.8) translateY(-20px);
    }
    10%{
        max-height: 0px;
        overflow: hidden;
        transform: scale(1, 0.8) translateY(-20px);
    }
    90%{
        visibility: visible !important;
        max-height: 600px;
    }
    100%{
        visibility: visible !important;
        opacity: 1 !important;
        transform: none;
        max-height: 600px;
        overflow: auto;
    }
}
```

### 下降展开大菜单动画

向用户展示诸如下拉菜单等在用户视野中新出现的菜单时，可以采用这种动画类型。

#### CSS 代码

```css
.list-show{
    animation-name: spiral-big-list-show;
    animation-duration: 350ms;
    animation-fill-mode: both;
    transition-timing-function: cubic-bezier(0.66, 0, 0, 1.1);
}
@keyframes spiral-big-list-show{
    0%{
        visibility: hidden;
        opacity: 0;
        max-height: 0px;
        overflow: hidden;
        transform: scale(1, 0.8) translateY(-20px);
    }
    10%{
        max-height: 0px;
        overflow: hidden;
        transform: scale(1, 0.8) translateY(-20px);
    }
    90%{
        visibility: visible !important;
        max-height: 600px;
    }
    100%{
        visibility: visible !important;
        opacity: 1 !important;
        transform: none;
        max-height: 600px;
        overflow: auto;
    }
}
```

> Tips：这些动画的方向可跟随其出现边角改变，例如：该菜单出现在屏幕的右上角，我们就把它的初始效果偏移由`translateY(-20px)`变为`translateY(-20px)`和`translateX(20px)`

## 弹窗动画

### 弹窗弹出动画

响应用户的操作，向用户展示在视野中新出现的弹窗时，可以采用这种动画类型。

#### CSS 代码

```css
.moden-show{
    animation-name: spiral-modal-show;
    animation-duration: 650ms;
    animation-fill-mode: both;
    transition-timing-function: cubic-bezier(0.58, 0, 0, 1.4);
}

@keyframes spiral-modal-show{
    0%{
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        transform: scale(0.9, 0.9) translateY(180px);
    }
    100%{
        visibility: visible !important;
        opacity: 1 !important;
        transform: none;
        overflow: auto;
    }
}
```

> Tips：这些动画的出现方向可跟随用户点击处改变。

### 弹窗背景淡入动画
#### CSS 代码
```css
.modal-show{
    animation-name: spiral-modal-background-show;
    animation-duration: 400ms;
    animation-fill-mode: both;
    transition-timing-function: ease-in-out;
}

@keyframes spiral-modal-background-show{
    0%{
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
    }
    100%{
        visibility: visible !important;
        opacity: 1 !important;
    }
}
```

