<!--
title: 05-React通信
sort:
-->

```react
// 父组件
<QRcode showText='fzf404' close={this.handleQRClose.bind(this)} />
// 子组件
<Button
    onClick={() => this.props.close()}
    >
    {this.props.showTe}
</Button>
```
