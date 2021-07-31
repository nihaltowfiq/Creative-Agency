import {
    faCommentDots,
    faPlus,
    faShoppingBag,
    faShoppingCart,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

export const adminItems = [
    { title: 'Service List', icon: faShoppingBag, slug: '/admin/service-list' },
    { title: 'Add Service', icon: faPlus, slug: '/admin/add-service' },
    { title: 'Make Admin', icon: faUserPlus, slug: '/admin/make-admin' },
];

export const customerItems = [
    { title: 'Order', icon: faShoppingCart, slug: '/customer/order' },
    {
        title: 'Enrolled Services',
        icon: faShoppingBag,
        slug: '/customer/enrolled-services',
    },
    { title: 'Review', icon: faCommentDots, slug: '/customer/review' },
];
