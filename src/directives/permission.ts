import type { ObjectDirective } from 'vue';
import type { RoleEnum } from '@/enums/roleEnum';
import { Storage } from '@/utils/Storage';
import { hasPermission } from '@/utils/permission/hasPermission';

//根据接口权限
export const permission: ObjectDirective = {
  mounted(el: HTMLButtonElement, binding) {
    console.log(binding.value, '90j09900222222222222');
    if (binding.value == undefined) return;
    const data = Storage.get('userInfo');

    const { action, effect } = binding.value;
    // 如果action不传，则认为不需要授权认证
    if (action == undefined) {
      return;
    }
    // console.log(vnode.ref.i.ctx.hasPermission(action), '虚拟')
    if (!hasPermission(action)) {
      if (effect == 'disabled') {
        el.disabled = true;
        el.setAttribute('title', '没有权限');
      } else {
        el.remove();
      }
    }
  },
};

//根据角色判断权限
/**
 * mark 权限指令
 * 指令用法：
 *  - 在需要控制权限的组件上使用 v-mark="['mark']" , 如下：
 *    <i-button v-mark="['admin','user']" >添加</a-button>
 *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
 */

export const markDirective = {
  mounted(el, binding) {
    const { roles = [] } = Storage.get('userInfo');
    const roleArr: RoleEnum[] = roles.map((val) => val?.value);
    const marksArr = binding.value;
    let flag = false;
    marksArr.forEach((val) => {
      roleArr.some(function (item) {
        if (item == val) {
          flag = true;
          return true;
        }
      });
    });
    if (!flag) {
      (el.parentNode && el.parentNode.removeChild(el)) || (el.style.display = 'none');
    }
  },
};
