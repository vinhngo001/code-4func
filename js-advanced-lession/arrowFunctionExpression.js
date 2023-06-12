//------viết hàm kiểu thông thường
function sum(a, b) {
    return a + b;
}
sum(2, 4);//6
//-----
var sum2 = function (a, b) {
    return a + b;
}
sum2(2, 1);//3
//-----dùng arrow function
var sum3 = (a, b) => {
    return a + b;
}
sum3(3, 2);//5
//---
//nếu trong hàm chỉ có 1 câu lệnh thì có thể bỏ { } và câu lệnh sau => đại diện cho lệnh return
var sum4 = (a, b) => a + b;
sum4(4, 5);//9
//---
//nếu có 1 tham số thì ko cần viết ( )
var square = x => x * x;
square(5); //25
//----
//nếu ko có tham số thì bắt buộc phải có ()
var doSomething = () => Date.now();
doSomething();//1590641814087
//-----
var arr = [1, 2, 3];
arr.map(x => x * x);//[ 1, 4, 9 ]

//============== arrow fuction có thể thay thế cho bind()
var a = {
    name: 'aaaa',
    run: function () {
        var run2 = function () {
            console.log("name is:" + this.name);//this là run2
        }
        run2();
    }
}
a.run();//name is:undefined
//======= cách sửa
var a = {
    name: 'aaaa',
    run: function () {
        var run2 = function () {
            console.log("name is:" + this.name);//this là run2
        }
        run2.bind(a)();//tương đương var runn=run2.bind(a);runn();
    }

}
a.run(); //name is:aaaa
//hoặc
var a = {
    name: 'aaaa',
    run: function () {
        var run2 = function () {
            console.log("name is:" + this.name);//this là run2
        }.bind(a);
        run2();
    }
}
a.run(); //name is:aaaa
//hoặc
var a = {
    name: 'aaaa',
    run: function () {
        //nếu có this ở đây thì this chính là a, tương đương this trong bind(this) 
        var run2 = function () {
            console.log("name is:" + this.name);//this là run2
        }.bind(this);
        run2();
    }
}
a.run(); //name is:aaaa
//hoặc
var a = {
    name: 'aaaa',
    run: function () {
        var that = this;
        var run2 = function () {
            console.log("name is:" + that.name);
        };
        run2();
    }
}
a.run(); //name is:aaaa
//hoặc dùng arrow function để sửa lỗi
var a = {
    name: 'aaaa',
    run: function () {
        var that = this;
        var run2 = () => {
            console.log("name is:" + this.name);
        };
        run2();
    }
}
a.run(); //name is:aaaa
//arrow function không có context nên this ở trên ko phải của run2, this sẽ là của cái hàm gần nhất mà arrow function nó nằm trong- ở đây chính là run của a
///---------====== ví dụ khác
var b = {
    foo: 'bar',
    run: function () {
        setTimeout(function () {
            console.log(this.foo);
        }, 2000);
    }
};
b.run();//undefined
//có thể sửa theo 1 trong các cách phía trên.
var b = {
    foo: 'bar',
    run: function () {
        setTimeout(() => {
            console.log(this.foo);
        }, 2000);
    }
};
b.run();//bar