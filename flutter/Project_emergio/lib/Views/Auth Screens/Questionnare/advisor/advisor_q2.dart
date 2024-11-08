import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'advisor_q3.dart';

class AdvisorQuestionnareScreen2 extends StatefulWidget {
  final String city;
  final String state;
  final String type;
  final String expertise;

  const AdvisorQuestionnareScreen2({
    super.key,
    required this.city,
    required this.state,
    required this.type,
    required this.expertise,
  });

  @override
  State<AdvisorQuestionnareScreen2> createState() => _AdvisorQuestionnareScreen2State();
}

class _AdvisorQuestionnareScreen2State extends State<AdvisorQuestionnareScreen2>
    with SingleTickerProviderStateMixin {
  String? selectedOption;
  final Color customYellow = const Color(0xffFFCC00);

  final List<Map<String, dynamic>> options = [
    {
      'title': 'Startups',
      'icon': Icons.rocket_launch_outlined,
      'description': 'Early-stage companies and new ventures',
    },
    {
      'title': 'Growing Business',
      'icon': Icons.trending_up_outlined,
      'description': 'Established businesses looking to expand',
    },
    {
      'title': 'Large Enterprises',
      'icon': Icons.business_outlined,
      'description': 'Well-established corporations and organizations',
    },
  ];

  void _handleOptionSelect(String option) {
    HapticFeedback.selectionClick();
    setState(() {
      selectedOption = option;
    });
  }

  @override
  Widget build(BuildContext context) {
    ScreenUtil.init(
      context,
      designSize: Size(375, 812),
      minTextAdapt: true,
    );

    return WillPopScope(
      onWillPop: () async {
        Navigator.of(context).pop();
        return false;
      },
      child: Scaffold(
        backgroundColor: Colors.white,
        appBar: PreferredSize(
          preferredSize: Size.fromHeight(56.h),
          child: AppBar(
            backgroundColor: Colors.white,
            elevation: 0,
            systemOverlayStyle: SystemUiOverlayStyle.dark,
            automaticallyImplyLeading: false,
            leadingWidth: 80.w,
            leading: GestureDetector(
              onTap: () => Navigator.pop(context),
              child: Padding(
                padding: EdgeInsets.symmetric(vertical: 16.h, horizontal: 20.w),
                child: Text(
                  'Back',
                  style: TextStyle(
                    color: Colors.grey[700],
                    fontSize: 15.sp,
                    fontWeight: FontWeight.w400,
                  ),
                ),
              ),
            ),
            actions: [
              Padding(
                padding: EdgeInsets.symmetric(vertical: 10.h, horizontal: 20.w),
                child: Row(
                  children: [
                    Text(
                      '03/',
                      style: TextStyle(
                        fontSize: 16.sp,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      '08',
                      style: TextStyle(
                        fontSize: 16.sp,
                        color: Colors.grey,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        body: Column(
          children: [
            // Progress bar
            Padding(
              padding: EdgeInsets.symmetric(vertical: 12.h, horizontal: 20.w),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(10.r),
                child: LinearProgressIndicator(
                  value: 0.375,
                  minHeight: 8.h,
                  backgroundColor: Colors.grey[200],
                  valueColor: AlwaysStoppedAnimation<Color>(customYellow),
                ),
              ),
            ),

            // Question Section
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 20.h),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'What types of clients are you most interested in working with?',
                    style: TextStyle(
                      fontSize: 24.sp,
                      fontWeight: FontWeight.w600,
                      color: Colors.black87,
                      height: 1.2,
                    ),
                  ),
                  SizedBox(height: 8.h),
                  Text(
                    'Select your preferred client category',
                    style: TextStyle(
                      fontSize: 15.sp,
                      color: Colors.grey[600],
                      height: 1.4,
                    ),
                  ),
                ],
              ),
            ),

            SizedBox(height: 24.h),

            // Options Section
            Expanded(
              child: ListView.separated(
                padding: EdgeInsets.symmetric(horizontal: 20.w),
                itemCount: options.length,
                separatorBuilder: (context, index) => SizedBox(height: 12.h),
                itemBuilder: (context, index) {
                  final option = options[index];
                  final isSelected = selectedOption == option['title'];

                  return Material(
                    color: Colors.white,
                    child: InkWell(
                      onTap: () => _handleOptionSelect(option['title']),
                      borderRadius: BorderRadius.circular(8.r),
                      child: Container(
                        padding: EdgeInsets.all(16.w),
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: isSelected ? customYellow : Colors.grey[300]!,
                            width: isSelected ? 1.5 : 1,
                          ),
                          borderRadius: BorderRadius.circular(8.r),
                        ),
                        child: Row(
                          children: [
                            Icon(
                              option['icon'],
                              color: isSelected ? customYellow : Colors.grey[600],
                              size: 22.sp,
                            ),
                            SizedBox(width: 16.w),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    option['title'],
                                    style: TextStyle(
                                      fontSize: 15.sp,
                                      fontWeight: FontWeight.w500,
                                      color: isSelected ? customYellow : Colors.black87,
                                      height: 1.3,
                                    ),
                                  ),
                                  SizedBox(height: 4.h),
                                  Text(
                                    option['description'],
                                    style: TextStyle(
                                      fontSize: 14.sp,
                                      color: Colors.grey[600],
                                      height: 1.3,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            if (isSelected)
                              Icon(
                                Icons.check_circle,
                                color: customYellow,
                                size: 20.sp,
                              ),
                          ],
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),

            // Continue Button
            Container(
              padding: EdgeInsets.all(20.w),
              decoration: BoxDecoration(
                color: Colors.white,
                border: Border(
                  top: BorderSide(
                    color: Colors.grey[200]!,
                    width: 1,
                  ),
                ),
              ),
              child: SafeArea(
                child: SizedBox(
                  width: double.infinity,
                  height: 48.h,
                  child: ElevatedButton(
                    onPressed: selectedOption != null ? () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => AdvisorQuestionnareScreen3(
                            city: widget.city,
                            state: widget.state,
                            type: widget.type,
                            expertise: widget.expertise,
                            clientType: selectedOption!,
                          ),
                        ),
                      );
                    } : null,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: customYellow,
                      elevation: 0,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8.r),
                      ),
                      disabledBackgroundColor: Colors.grey[300],
                    ),
                    child: Text(
                      'Continue',
                      style: TextStyle(
                        color: Colors.black87,
                        fontSize: 15.sp,
                        fontWeight: FontWeight.w500,
                        letterSpacing: 0.2,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}