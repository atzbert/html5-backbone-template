(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'text!../templates/landing.html', 'GeoLocator'], function(Backbone, LandingTemplate, GeoLocator) {
    var LandingView;
    return LandingView = (function(_super) {

      __extends(LandingView, _super);

      LandingView.prototype.el = $("#content");

      LandingView.prototype.events = {
        'submit #landing-search-form': 'submit'
      };

      function LandingView(searchDataModel) {
        this.searchDataModel = searchDataModel;
        this.removeAllErrorMessages = __bind(this.removeAllErrorMessages, this);

        this.showErrorMessages = __bind(this.showErrorMessages, this);

        this.validate = __bind(this.validate, this);

        this.submit = __bind(this.submit, this);

        this.render = __bind(this.render, this);

        LandingView.__super__.constructor.call(this);
      }

      LandingView.prototype.render = function() {
        var compiledTemplate, data,
          _this = this;
        this.searchDataModel.loadFromCookie();
        data = {
          searchData: this.searchDataModel.toJSON()
        };
        compiledTemplate = _.template(LandingTemplate, data);
        this.$el.html(compiledTemplate);
        $.ajax("http://www.immobilienscout24.de/content/campaigns/is24baufi/anbietervergleich/anbietervergleich-sidebar/_jcr_content/par.html?_=1355924169114", {
          success: function(data) {
            return $("[data-id=cms_teaser]").html = dat;
          }
        });
        $("[data-id=pos_btn]").on("click", function() {
          var geo;
          geo = new GeoLocator;
          return geo.setPostcodeByCurrentLocationInInput($("[data-id=postcode]")[0]);
        });
        $("[data-id=purchase_price]").on("keyup", function() {
          return $("[data-id=purchase_price]").val(parseInt($("[data-id=purchase_price]").val().removeNumberFormatter()).formatNumber());
        });
        return $("#wait-overlay").hide();
      };

      LandingView.prototype.submit = function() {
        if (!this.validate()) {
          return false;
        }
        this.searchDataModel.set({
          postcode: $("[data-id=postcode]").val(),
          purchasePrice: $("[data-id=purchase_price]").val().removeNumberFormatter()
        });
        this.searchDataModel.saveToCookie();
        $('form')[0].submit();
        return false;
      };

      LandingView.prototype.validate = function() {
        var errFields;
        this.removeAllErrorMessages();
        errFields = [];
        if (parseInt($("[data-id=postcode]").val()) < 10000 || parseInt($("[data-id=postcode]").val()) > 99999 || parseInt($("[data-id=postcode]").val()) === void 0 || isNaN(parseInt($("[data-id=postcode]").val()))) {
          errFields.push($("[data-id=postcode]"));
        }
        if (parseInt($("[data-id=purchase_price]").val().removeNumberFormatter()) < 25000 || parseInt($("[data-id=purchase_price]").val().removeNumberFormatter()) === void 0 || isNaN(parseInt($("[data-id=purchase_price]").val().removeNumberFormatter()))) {
          errFields.push($("[data-id=purchase_price]"));
        }
        return this.showErrorMessages(errFields);
      };

      LandingView.prototype.showErrorMessages = function(errFields) {
        var ele, _i, _len;
        if (errFields.length > 0) {
          $(".err-msg").show();
          window.scrollTo(0, 0);
          for (_i = 0, _len = errFields.length; _i < _len; _i++) {
            ele = errFields[_i];
            ele.addClass("err");
          }
          return false;
        } else {
          return true;
        }
      };

      LandingView.prototype.removeAllErrorMessages = function() {
        var err, errors, _i, _len, _results;
        $(".err-msg").hide();
        errors = document.querySelectorAll(".err");
        _results = [];
        for (_i = 0, _len = errors.length; _i < _len; _i++) {
          err = errors[_i];
          _results.push($(err).removeClass("err"));
        }
        return _results;
      };

      return LandingView;

    })(Backbone.View);
  });

}).call(this);
