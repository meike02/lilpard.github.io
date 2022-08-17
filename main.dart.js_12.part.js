// Generated by dart2js (NullSafetyMode.sound, trust primitives, omit checks, lax runtime type, deferred-serialization, csp), the Dart to JavaScript compiler version: 2.18.0-271.4.beta.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var B = {
    BlogList$(listData) {
      return new B.BlogList(listData, null);
    },
    BlogList: function BlogList(t0, t1) {
      this.listData = t0;
      this.lastYear = "";
      this.key = t1;
    },
    BlogList_build_closure: function BlogList_build_closure(t0, t1, t2, t3) {
      var _ = this;
      _._box_0 = t0;
      _.$this = t1;
      _.groups = t2;
      _.years = t3;
    },
    BlogList_build_closure0: function BlogList_build_closure0(t0, t1, t2) {
      this._box_0 = t0;
      this.list = t1;
      this.years = t2;
    },
    BlogList_build_closure1: function BlogList_build_closure1(t0) {
      this.list = t0;
    },
    BlogListItem: function BlogListItem(t0, t1, t2) {
      this.year = t0;
      this.blogInfo = t1;
      this.key = t2;
    },
    BlogListItem_build_closure: function BlogListItem_build_closure(t0) {
      this.$this = t0;
    },
    BlogListItem_build_closure0: function BlogListItem_build_closure0(t0) {
      this.$this = t0;
    }
  },
  J, A, C, E, F, G, H, D;
  B = hunkHelpers.updateHolder(holdersList[15], B);
  J = holdersList[1];
  A = holdersList[0];
  C = holdersList[2];
  E = holdersList[22];
  F = holdersList[23];
  G = holdersList[19];
  H = holdersList[21];
  D = holdersList[24];
  B.BlogList.prototype = {
    build$1(context) {
      var groups, years, _null = null, t1 = {},
        list = J.toList$0$ax(this.listData);
      A.Props$(context);
      groups = A._setArrayType([], type$.JSArray_int);
      years = A._setArrayType([], type$.JSArray_String);
      t1.groupSize = 0;
      C.JSArray_methods.forEach$1(list, new B.BlogList_build_closure(t1, this, groups, years));
      t1.yearIndex = t1.listIndex = 1;
      C.JSArray_methods.insert$2(list, 0, new E.BlogSimpleInfo("0000", "20" + years[0]));
      C.JSArray_methods.forEach$1(groups, new B.BlogList_build_closure0(t1, list, years));
      return A.Scrollbar$(F.SingleChildScrollView$(G.ListView$builder(new B.BlogList_build_closure1(list), list.length, new H.NeverScrollableScrollPhysics(_null), true), _null, new A.BouncingScrollPhysics(_null), C.Axis_1), _null);
    }
  };
  B.BlogListItem.prototype = {
    build$1(context) {
      var t2, t3, t4, _this = this, _null = null,
        props = A.Props$(context),
        t1 = _this.year;
      if (t1 != null) {
        t2 = props.__Props_isPhone_A;
        t2 === $ && A.throwUnnamedLateFieldNI();
        t2 = t2 ? C.MainAxisAlignment_3 : C.MainAxisAlignment_2;
        t3 = A._setArrayType([], type$.JSArray_Widget);
        if (!props.__Props_isPhone_A)
          t3.push(new A.Spacer(12, _null));
        t3.push(D.TextExt_editProp(A.Text$(t1, _null, _null, _null, _null), 18, C.FontWeight_6));
        if (!props.__Props_isPhone_A)
          t3.push(new A.Spacer(136, _null));
        t1 = A.Row$(t3, C.CrossAxisAlignment_2, t2, C.MainAxisSize_1, _null);
        t2 = props.__Props_isPhone_A;
        t3 = t2 ? 26 : 0;
        return A.WidgetExt_intoContainer(t1, _null, new A.EdgeInsets(t3, 16, t2 ? 26 : 0, 0), _null, _null);
      } else {
        t1 = props.__Props_isCrowded_A;
        t1 === $ && A.throwUnnamedLateFieldNI();
        t2 = type$.JSArray_Widget;
        if (t1) {
          t1 = _this.blogInfo;
          t3 = A.Row$(A._setArrayType([A.WidgetExt_intoContainer(D.TextExt_editProp(A.Text$(t1.title, _null, _null, _null, _null), 15, _null), _null, _null, new A.EdgeInsets(14, 0, 0, 0), _null)], t2), C.CrossAxisAlignment_2, C.MainAxisAlignment_0, C.MainAxisSize_1, _null);
          t1 = t1.createdDate;
          t1.toString;
          return A.InkWell$(false, true, A.WidgetExt_intoContainer(A.Column$(A._setArrayType([t3, A.Row$(A._setArrayType([new A.Flexible(1, C.FlexFit_1, D.TextExt_editProp(A.Text$(t1, _null, _null, _null, _null), 15, _null), _null)], t2), C.CrossAxisAlignment_2, C.MainAxisAlignment_1, C.MainAxisSize_1, _null)], t2), C.CrossAxisAlignment_2, C.MainAxisAlignment_0, C.MainAxisSize_1), _null, new A.EdgeInsets(28, 16, 28, 0), _null, _null), _null, true, _null, _null, _null, _null, _null, _null, _null, _null, _null, new B.BlogListItem_build_closure(_this), _null, _null, _null, _null);
        } else {
          t1 = A._setArrayType([], t2);
          t3 = props.__Props_isPhone_A;
          t3 === $ && A.throwUnnamedLateFieldNI();
          if (!t3)
            t1.push(new A.Spacer(16, _null));
          t3 = _this.blogInfo;
          t4 = A.WidgetExt_intoContainer(D.TextExt_editProp(A.Text$(t3.title, _null, _null, _null, _null), 15, _null), _null, _null, new A.EdgeInsets(22, 0, 0, 0), _null);
          t3 = t3.createdDate;
          t3.toString;
          t1.push(new A.Flexible(158, C.FlexFit_0, A.Row$(A._setArrayType([t4, D.TextExt_editProp(A.Text$(C.JSString_methods.substring$1(t3, 3), _null, _null, _null, _null), 13, _null)], t2), C.CrossAxisAlignment_2, C.MainAxisAlignment_3, C.MainAxisSize_1, _null), _null));
          if (!props.__Props_isPhone_A)
            t1.push(new A.Spacer(16, _null));
          t1 = A.Row$(t1, C.CrossAxisAlignment_2, C.MainAxisAlignment_3, C.MainAxisSize_1, _null);
          t2 = props.__Props_isPhone_A;
          t3 = t2 ? 28 : 0;
          return A.InkWell$(false, true, A.WidgetExt_intoContainer(t1, _null, new A.EdgeInsets(t3, 16, t2 ? 28 : 0, 0), _null, _null), _null, true, _null, _null, _null, _null, _null, _null, _null, _null, _null, new B.BlogListItem_build_closure0(_this), _null, _null, _null, _null);
        }
      }
    }
  };
  var typesOffset = hunkHelpers.updateTypes(["~(BlogSimpleInfo)", "BlogListItem(BuildContext,int)"]);
  B.BlogList_build_closure.prototype = {
    call$1(element) {
      var thisYear, t2, t3, groupSize, _this = this,
        t1 = element.createdDate;
      t1.toString;
      thisYear = C.JSString_methods.substring$2(t1, 0, 2);
      t1 = _this.$this;
      if (thisYear !== t1.lastYear) {
        t2 = _this._box_0;
        t3 = t2.groupSize;
        if (t3 !== 0) {
          groupSize = t3 + 1;
          t2.groupSize = groupSize;
          _this.groups.push(groupSize);
        }
        _this.years.push(thisYear);
        t2.groupSize = 0;
      } else
        ++_this._box_0.groupSize;
      t1.lastYear = thisYear;
    },
    $signature: typesOffset + 0
  };
  B.BlogList_build_closure0.prototype = {
    call$1(element) {
      var t1 = this._box_0;
      C.JSArray_methods.insert$2(this.list, element + t1.listIndex, new E.BlogSimpleInfo("0000", "20" + this.years[t1.yearIndex]));
      t1.listIndex = t1.listIndex + (1 + element);
      ++t1.yearIndex;
    },
    $signature: 27
  };
  B.BlogList_build_closure1.prototype = {
    call$2(context, index) {
      var _null = null,
        blogInfo = this.list[index];
      if (blogInfo.id === "0000")
        return new B.BlogListItem(blogInfo.title, _null, _null);
      else
        return new B.BlogListItem(_null, blogInfo, _null);
    },
    $signature: typesOffset + 1
  };
  B.BlogListItem_build_closure.prototype = {
    call$0() {
      var t1 = $.$get$navigator(),
        t2 = this.$this.blogInfo.id;
      return t1.navigatorKey.get$currentState().pushNamed$1$1("/blog?id=" + t2, type$.nullable_Object);
    },
    $signature: 0
  };
  B.BlogListItem_build_closure0.prototype = {
    call$0() {
      var t2,
        t1 = $.$get$menuKey().get$currentState();
      if (t1 != null)
        t1.hideMenu$0();
      t1 = $.$get$navigator();
      t2 = this.$this.blogInfo.id;
      t1.navigatorKey.get$currentState().pushNamed$1$1("/blog?id=" + t2, type$.nullable_Object);
    },
    $signature: 0
  };
  (function inheritance() {
    var _inheritMany = hunkHelpers.inheritMany,
      _inherit = hunkHelpers.inherit;
    _inheritMany(A.StatelessWidget, [B.BlogList, B.BlogListItem]);
    _inheritMany(A.Closure, [B.BlogList_build_closure, B.BlogList_build_closure0]);
    _inherit(B.BlogList_build_closure1, A.Closure2Args);
    _inheritMany(A.Closure0Args, [B.BlogListItem_build_closure, B.BlogListItem_build_closure0]);
  })();
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"BlogList":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]},"BlogListItem":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  var type$ = {
    JSArray_String: A.findType("JSArray<String>"),
    JSArray_Widget: A.findType("JSArray<Widget>"),
    JSArray_int: A.findType("JSArray<int>"),
    nullable_Object: A.findType("Object?")
  };
};

$__dart_deferred_initializers__["5OINFPuoj6GH4yavkbhQ4XJzB6M="] = $__dart_deferred_initializers__.current